import React, {Component} from 'react';
import PropTypes from 'prop-types';
import daum from 'daum'
import {
    customCityList,
    customDoList,
    getDistanceFromLatLonInKm,
    getDiameter
} from "../../data/custom";
import {fetchHeader} from "../../data/consts";

const parseOptions = options => (
    Object.keys(options).map(_ => ({
        key: _,
        value: options[_]
    })).filter(_ => _.value)
)

class SearchResultMapContainer extends Component {
    constructor(props) {
        super(props);
        this.map = null
        this.clusterer = null
        this.pageSize = 10
    }

    componentDidMount() {
        const {longitude, latitude} = this.props

        const initMapDoLevel = 10;
        const initMapCityLevel = 9;
        const initMapSearchLevel = 6;

        const latLng = new daum.maps.LatLng(latitude, longitude)

        var container = document.getElementById('dmap'); //지도를 담을 영역의 DOM 레퍼런스
        var options = { //지도를 생성할 때 필요한 기본 옵션
            center: latLng, //지도의 중심좌표.
            level: initMapDoLevel //지도의 레벨(확대, 축소 정도)
        };
        if (latLng && latLng.ib !== 0) {
            options.center = latLng;
        }

        this.map = new daum.maps.Map(container, options); //지도 생성 및 객체 리턴
        this.map.panTo(options.center);

        daum.maps.event.addListener(this.map, 'dragend', () => {
            var position = this.map.getCenter();
            if (this.map.getLevel() < initMapCityLevel - 1) {
                this.doSearch(position.getLat(), position.getLng(), null);
            }
        });

        daum.maps.event.addListener(this.map, 'zoom_changed', () => {
            // if($scope.vars.isPendingSearch) return;
            // if(Consts.MODE === 'APP') cordova.plugins.Keyboard.close();

            const currentLevel = this.map.getLevel();
            setTimeout(() => {
                this.clearCluster(true);
                if (currentLevel < initMapCityLevel - 1) {
                    this.clearCityGroup();
                    this.doSearch();
                } else if (currentLevel > initMapCityLevel - 1) {
                    this.clearCityGroup();
                    this.showDoGroup();
                } else if (currentLevel === initMapCityLevel - 1
                    || currentLevel === initMapCityLevel) {
                    this.clearDoGroup();
                    this.showCityGroup();
                }
            });
        });

        this.showDoGroup()
        this.map.setLevel(initMapCityLevel - 3)
    }

    clearCityGroup() {
        customCityList.forEach(function (customOverlay) {
            customOverlay.setMap(null);
        });
    }

    showCityGroup() {
        customCityList.forEach((customOverlay) => {
            customOverlay.setMap(this.map);
        });
    }

    clearDoGroup() {
        customDoList.forEach(function (customOverlay) {
            customOverlay.setMap(null);
        });
    }

    showDoGroup() {
        customDoList.forEach((customOverlay) => {
            customOverlay.setMap(this.map);
        });
    }

    createOrUpdateCluster() {
        if (!this.clusterer) {
            this.clusterer = new daum.maps.MarkerClusterer({
                map: this.map, // 마커들을 클러스터로 관리하고 표시할 지도 객체
                averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
//         minLevel: $rootScope.static.currentLevel, // 클러스터 할 최소 지도 레벨
                minLevel: 3, // 클러스터 할 최소 지도 레벨
                disableClickZoom: true, // 클러스터 마커를 클릭했을 때 지도가 확대되지 않도록 설정한다 ,

                calculator: [2], // 클러스터의 크기 구분 값, 각 사이값마다 설정된 text나 style이 적용된다
                //texts: getTexts, // texts는 ['삐약', '꼬꼬', '꼬끼오', '치멘'] 이렇게 배열로도 설정할 수 있다
                styles: [
                    { // calculator 각 사이 값 마다 적용될 스타일을 지정한다
                        width: '30px', height: '30px',
                        background: 'rgba(255,153,102,0.8)',
                        borderRadius: '10px',
                        borderStyle: 'solid',
                        borderColor: 'rgba(255,153,102,1.0)',
                        borderWidth: '2px',
                        color: '#fff',
                        textAlign: 'center',
                        fontWeight: 'bold',
                        lineHeight: '31px'
                    },
                    { // calculator 각 사이 값 마다 적용될 스타일을 지정한다
                        width: '30px', height: '30px',
                        background: 'rgba(255,153,102,0.8)',
                        borderRadius: '25px',
                        borderStyle: 'solid',
                        borderColor: 'rgba(255,153,102,1.0)',
                        borderWidth: '2px',
                        color: '#fff',
                        textAlign: 'center',
                        fontWeight: 'bold',
                        lineHeight: '31px'
                    },
                    {
                        width: '30px', height: '30px',
                        background: 'rgba(255,153,102,0.8)',
                        borderRadius: '30px',
                        borderStyle: 'solid',
                        borderColor: 'rgba(255,153,102,1.0)',
                        borderWidth: '2px',
                        color: '#fff',
                        textAlign: 'center',
                        fontWeight: 'bold',
                        lineHeight: '31px'
                    },
                    {
                        width: '30px', height: '30px',
                        background: 'rgba(255,153,102,0.8)',
                        borderRadius: '35px',
                        borderStyle: 'solid',
                        borderColor: 'rgba(255,153,102,1.0)',
                        borderWidth: '2px',
                        color: '#fff',
                        textAlign: 'center',
                        fontWeight: 'bold',
                        lineHeight: '31px'
                    },
                    {
                        width: '30px', height: '30px',
                        background: 'rgba(255,153,102,0.8)',
                        borderRadius: '40px',
                        borderStyle: 'solid',
                        borderColor: 'rgba(255,153,102,1.0)',
                        borderWidth: '2px',
                        color: '#fff',
                        textAlign: 'center',
                        fontWeight: 'bold',
                        lineHeight: '31px'
                    }
                ]

            });
        } else {
            this.clusterer.removeMarkers(this.markers);
        }
        var imageSrc = '/img/marker.png'; // 마커이미지의 주소입니다
        var imageSize = new daum.maps.Size(30, 30), // 마커이미지의 크기입니다
            imageOption = {offset: new daum.maps.Point(0, 0)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
        var markerImage = new daum.maps.MarkerImage(imageSrc, imageSize, imageOption);

        var points = [];

        this.markers = [];
        this.state.dataList.forEach((data) => {
            var position = new daum.maps.LatLng(data.location[1], data.location[0]);
            var marker = new daum.maps.Marker({
                map: this.map,
                position: position,
                clickable: true,
                image: markerImage
            });
            points.push(position);
            marker.kosiwon = data;

            daum.maps.event.addListener(marker, 'click', () => {
                this.doClickMarker(marker);
            });

            this.markers.push(marker);
        });

        this.clusterer.addMarkers(this.markers);
        daum.maps.event.addListener(this.clusterer, 'clusterclick', (cluster) => {
            setTimeout(async () => {
                await this.doClickCluster(cluster, true);
            }, 200);
        });
    }

    async doToggleClusterList (isShowClusterList) {
        return this.props.setParentStateAsync({
            isShowClusterList
        });
    }

    async doClickCluster(cluster, isRefresh) {
        await this.doToggleClusterList(true)
        if (cluster) {
            if (this.currentCluster !== cluster) this.pageNo = 1;
            this.currentCluster = cluster;
        }

        // $scope.vars.isClickCluster = true;

        var markers = this.currentCluster.getMarkers();
        if (!markers) return;

        this.idArrayList = [];
        markers.forEach((marker) => {
            this.idArrayList.push(marker.kosiwon._id);
        });

        try {
            const fetchResult = await fetch('http://www.kosirock.com/api/kosiwons/listByIdListWithPaging', {
                method: 'POST',
                headers: fetchHeader,
                body: JSON.stringify({
                    projectOption: {
                        kosiwonName: 1,
                        priceMin: 1,
                        priceMax: 1,
                        intro: 1,
                        isParking: 1,
                        isMeal: 1,
                        isSeparate: 1,
                        isRestRoom: 1,
                        thumbnailUri: 1,
                        location: 1
                    },
                    idArrayList: this.idArrayList,
                    sortOption: {priority: -1, thumbnailUri: -1},
                    pageNo: this.pageNo,
                    pageSize: 10
                })
            })

            this.clusterList = []

            if (fetchResult.ok) {
                const result = await fetchResult.json()
                this.clusterList = result.items
                if (isRefresh) {
                    this.pageNo = 1
                }
                if (result.totalItems % this.pageSize === 0) {
                    this.totalPages = Math.floor(result.totalItems / this.pageSize);
                } else {
                    this.totalPages = Math.floor(result.totalItems / this.pageSize) + 1;
                }

                this.pageNoList = []
                const div = Math.floor((this.pageNo - 1) / 10);
                this.startIndex = div * 10 + 1;
                this.endIndex = this.totalPages > (this.startIndex + 9) ? this.startIndex + 9 : this.totalPages;
                this.startIndex = this.endIndex - (this.startIndex + 9) > 0 ? this.startIndex : this.endIndex - 9;
                if (this.startIndex < 1) this.startIndex = 1;

                for (let i = this.startIndex; i <= this.endIndex; i++) {
                    this.pageNoList.push(i);
                }
                this.updateResultList()
            }
        } catch (e) {
        }

        var level = this.map.getLevel();
        this.map.setLevel(level, {anchor: this.currentCluster.getCenter()});
        this.map.panTo(new daum.maps.LatLng(this.currentCluster.getCenter().jb, this.currentCluster.getCenter().ib));
        //showClusterList(true);
    }

    updateResultList () {
        console.log('updating', this.clusterList.length)
        return this.props.setParentStateAsync({
            pageNo: this.pageNo,
            pageNoList: this.pageNoList,
            clusterList: this.clusterList,
            totalPages: this.totalPages,
            itemList: this.idArrayList
        })
    }

    async doClickMarker(marker) {
        await this.doToggleClusterList(true)

        this.idArrayList = [];
        this.idArrayList.push(marker.kosiwon._id);

        try {
            const fetchResult = await fetch('http://www.kosirock.com/api/kosiwons/listByIdList', {
                method: 'POST',
                headers: fetchHeader,
                body: JSON.stringify({
                    projectOption: {
                        kosiwonName: 1,
                        priceMin: 1,
                        priceMax: 1,
                        intro: 1,
                        isParking: 1,
                        isMeal: 1,
                        isSeparate: 1,
                        isRestRoom: 1,
                        thumbnailUri: 1,
                        location: 1
                    },
                    idArrayList: this.idArrayList,
                    sortOption: {priority: -1, thumbnailUri: -1},
                })
            })

            this.clusterList = null;

            if (fetchResult.ok) {
                const result = await fetchResult.json()
                this.clusterList = [];
                this.clusterList.push(result.items[0]);

                this.pageNo = 1;
                this.totalPages = 1;
                this.pageNoList = [];

                this.startIndex = 1;
                this.endIndex = 2;
                this.pageNoList.push(1);
                this.updateResultList()
            }
        } catch (e) {

        }
    }

    clearCluster () {
        if (!this.clusterer) return;

        daum.maps.event.removeListener(this.clusterer, 'clusterclick', (cluster) => {
            setTimeout(() => {
                this.doClickCluster(cluster, true);
            }, 200);
        });
        this.clusterer.removeMarkers(this.markers);
        this.map.relayout();
    }

    async doSearch(lat, lng) {
        const {priceRange, detailOptions, roomOptions} = this.props
        // const {match} = this.props
        // const {longitude, latitude} = match.params
        let latlng;
        let latitude = lat
        let longitude = lng

        if (lat && lng && lat !== 0 && lng !== 0) {
            latlng = new daum.maps.LatLng(lat, lng);
            this.map.panTo(latlng);
        } else {
            if (!latlng || latlng.ib === 0) {
                latlng = this.map.getCenter()
            }
        }

        if (!lat && lat !== 0) latitude = latlng.getLat();
        if (!lng && lng !== 0) longitude = latlng.getLng();

        if (lat > 40 || lat < 30) latitude = 0;
        if (lng > 200 || lng < 100) longitude = 0;

        const bounds = this.map.getBounds();
        const swLatLng = bounds.getSouthWest();
        const neLatLng = bounds.getNorthEast();

        const diagonal = getDistanceFromLatLonInKm(swLatLng.jb, swLatLng.ib, neLatLng.jb, neLatLng.ib);
        let maxDistance = Math.floor(getDiameter(diagonal) / 2.5); // 범위 조절
        if (!maxDistance) maxDistance = 10000;

        const detailOptionsParsed = parseOptions(detailOptions)
        const roomOptionsParsed = parseOptions(roomOptions)

        let priceRangeParsed = []

        if (priceRange.priceMin !== '0') {
            priceRangeParsed.push({
                operator: '$lte',
                type: 'number',
                key: 'priceMin',
                value: priceRange.priceMin
            })
        }

        if (priceRange.priceMax !== '0') {
            priceRangeParsed.push({
                operator: '$gte',
                type: 'number',
                key: 'priceMax',
                value: priceRange.priceMax
            })
        }

        const body = {
            andOption: [
                {key: 'isPublic', value: true},
                ...detailOptionsParsed,
                ...roomOptionsParsed,
                ...priceRangeParsed
            ],
            populateOption: false,
            projectOption: {
                kosiwonAddress: 1,
                kosiwonName: 1,
                location: 1
            },
            orOption: [],
            longitude,
            latitude,
            maxDistance: maxDistance,
            minDistance: 0,
            sortOption: {
                priority: -1
            },
            pageNo: 1,
            pageSize: 10000
        }

        try {
            const searchFetch = await fetch(`http://www.kosirock.co.kr/api/kosiwons/listBySearchOptionNear`, {
                method: 'POST',
                headers: fetchHeader,
                body: JSON.stringify(body)
            })

            const result = await searchFetch.json()
            await this.setStateAsync({
                dataList: result.items,
                totalItems: result.totalItems
            })

            if (result.totalItems < 1) {
                this.clearCluster()
            } else {
                this.createOrUpdateCluster()
            }
        } catch (e) {
            this.map.relayout()
        }
    }

    async setStateAsync(newState) {
        return new Promise(resolve => (
            resolve(this.setState({
                ...this.state,
                ...newState
            }))
        ))
    }

    render() {
        return (
            <div className="map_view" style={{zIndex: 1}}>
                <div id="dmap" align="absmiddle"
                     style={{width: window.innerWidth + 'px', height: window.innerHeight - 100 - 37 + 'px'}}/>
            </div>
        );
    }
}

SearchResultMapContainer.propTypes = {};

export default SearchResultMapContainer;
