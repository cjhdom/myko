'use strict'

export const fetchHeader = new Headers({
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Pragma': 'no-cache',
    'Cache-Control': 'no-cache'
})

export const MasterList = [{
    id: "5922693b962608eb38211d0d",
    fullName: "다솔하우스 신천점",
    name: "다솔 하우스",
    desc: "●2인실 보유● 깔끔한 원룸 다솔하우스입니다.",
    imgPath: "/www/img/dasolhouse.jpg",
    spanList: [{className: "line2", desc: "호선 잠실새내역 인근"}]
}, {
    id: "58dc9cb13a4e765a6254d41c",
    fullName: "홍익 고시텔",
    name: "홍익 고시텔",
    desc: "●홍대생 환영● 깔끔하고 위치좋은 홍익 고시텔입니다.",
    imgPath: "/www/img/hongik.jpg",
    spanList: [{className: "school", desc: "홍익대학교"}, {className: "line6", desc: "호선 상수역 인근"}]
}, {
    id: "57fe101c48b3063022eb5e38",
    fullName: "대성 고시텔 (여성전용)",
    name: "대성 고시텔 (여성전용)",
    desc: "●여성전용● 성신여대역 도보 3분 대성 고시텔입니다.",
    imgPath: "/www/img/daesung.jpg",
    spanList: [{className: "school", desc: "성신여대"}, {className: "line4", desc: "호선 성신여대역 인근"}]
}, {
    id: "58eb25661e0daa8b3bc0f8a4",
    fullName: "멀티하우스 종로점",
    name: "멀티하우스 종로점",
    desc: "종로3가역 도보 1분에 위치한 멀티하우스입니다.",
    imgPath: "/www/img/multy.jpg",
    spanList: [{className: "line1", desc: ""}, {className: "line3", desc: ""}, {
        className: "line5",
        desc: "호선 종로3가역 인근"
    }]
}, {
    id: "59facc2a18d14d5f6698ac86",
    fullName: "훼미리 레지던스 신촌점",
    name: "훼미리 레지던스 신촌점",
    desc: "연대정문 앞, 신촌역 1번출구 도보 7분거리에 있는 훼미리 레지던스입니다.",
    imgPath: "/www/img/master_17.jpg",
    spanList: [{className: "school", desc: "연세대학교"}, {className: "line2", desc: "호선 신촌역 인근"}]
}, {
    id: "5a24fc784d07bbff4160aff7",
    fullName: "휴식 사가정 본점",
    name: "휴식 사가정 본점",
    desc: "★12월 신설오픈★ 사가정역 4번출구 도보 1분 풀옵션 레지던스",
    imgPath: "/www/img/master_26.jpg",
    spanList: [{className: "school", desc: "서일대"}, {className: "line7", desc: "호선 사가정역 인근"}]
}, {
    id: "5994f3b9b14c10421b0b7f67",
    fullName: "힐탑 고시원",
    name: "힐탑 고시원",
    desc: "노량진역, 장승배기역 사이에 있는 힐탑 고시원입니다.",
    imgPath: "/www/img/hilltop.jpg",
    spanList: [{className: "line1", desc: ""}, {className: "line9", desc: "호선 노량진역 인근"}]
}, {
    id: "595de8251723d15316e4190c",
    fullName: "이삭 리빙텔 신촌점",
    name: "이삭 리빙텔",
    desc: "신촌역 5분거리, 시강대학교 앞 이삭 리빙텔입니다.",
    imgPath: "/www/img/isak.jpg",
    spanList: [{className: "school", desc: "서강대학교"}, {className: "line2", desc: "호선 신촌역 인근"}]
}, {
    id: "599b9a0b01a777cd39518785",
    fullName: "이삭 리빙텔 신촌점",
    name: "큰방 대학로 굿스테이",
    desc: "●2인실 보유● 깔끔한 원룸 큰방 굿스테이이입니다.",
    imgPath: "/www/img/master_1.jpg",
    spanList: [{className: "school", desc: "가톨릭대 성신교정"}, {className: "line4", desc: "호선 혜화역 인근"}]
}, {
    id: "599bc28be34419363c5acdb4",
    fullName: "코코레지던스 약수역점",
    name: "코코레지던스 약수역점",
    desc: "약수역 도보 1분거리, 코코레지던스 약수역점입니다.",
    imgPath: "/www/img/master_2.jpg",
    spanList: [{className: "line3", desc: ""}, {className: "line6", desc: "호선 약수역 인근"}]
}, {
    id: "5a8ae6ee7541e02e3f57b043",
    fullName: "건대역 원룸텔",
    name: "건대역 원룸텔",
    desc: "건대입구역  도보 5분거리에 위치한 건대역 원룸텔입니다.",
    imgPath: "/www/img/master_33.jpg",
    spanList: [{className: "school", desc: "건국대"},
        {className: "line2", desc: ""},
        {className: "line7", desc: "호선 건대입구역 인근"}
    ]
}, {
    id: "58e207be1e0daa8b3bc0f7a1",
    fullName: "소호 종로 고시원",
    name: "소호 종로 고시원",
    desc: "종각역 1번 출구에서 도보 3분거리에 위치한 소호종로고시원입니다.",
    imgPath: "/www/img/sohojongro.jpg",
    spanList: [{className: "line1", desc: "호선 종각역 인근"}]
}, {
    id: "59b8feeb525f9f3f6a2b45f1",
    fullName: "참조운 고시텔 백석역점",
    name: "참조운 고시텔",
    desc: "일산병원 옆 백석역 도보 10분 참조운 고시텔입니다.",
    imgPath: "/www/img/master_5.jpg",
    spanList: [{className: "line3", desc: "호선 백석역 인근"}]
}, {
    id: "5a951f56e8fa0beb14bb3f7b",
    fullName: "스토리원룸텔 동대문점",
    name: "스토리원룸텔 동대문점",
    desc: "★신설오픈★ 풀옵션 원룸텔 스토리원룸텔입니다.",
    imgPath: "/www/img/master_31.jpg",
    spanList: [{className: "line2", desc: ""}, {className: "line4", desc: ""}, {className: "line5", desc: "호선 동대문역사문화공원역 인근"}]
}, {
    id: "5afbfa1a3324cd7f0e3d79c0",
    fullName: "씨티빌 고시원",
    name: "씨티빌 고시원",
    desc: "★첫달할인★ 노들역 도보 1분거리에 위치한 씨티빌 고시원입니다.",
    imgPath: "/www/img/master_44.jpg",
    spanList: [{className: "line9", desc: "호선 노들역 인근"}]
}, {
    id: "5a3368d58c653f3d0329aeec",
    fullName: "명성 고시원",
    name: "명성 고시원",
    desc: "오류동역 도보 1분거리 오피스텔급 명성 고시원입니다.",
    imgPath: "/www/img/master_30.jpg",
    spanList: [{className: "line1", desc: "호선 오류동역 인근"}]
}, {
    id: "59df07b9fbc2633f6b3c6c3c",
    fullName: "노블스 고시텔",
    name: "노블스 고시텔",
    desc: "부천시청역 3번출구 도보 3분거리에 위치한 노블스 고시텔입니다.",
    imgPath: "/www/img/master_9.jpg",
    spanList: [{className: "line7", desc: "호선 부천시청역 인근"}]
}, {
    id: "59df1f2e358b07516b474eef",
    fullName: "메종드빌 송파점",
    name: "메종드빌 송파점",
    desc: "송파역 2번출구 도보 5분거리에 위치한 메종드빌 송파점입니다.",
    imgPath: "/www/img/master_10.jpg",
    spanList: [{className: "line8", desc: "호선 송파역 인근"}]
}, {
    id: "59defa2832c01b4a6b80df7e",
    fullName: "부천 아이비하우스",
    name: "부천 아이비하우스",
    desc: "부천대앞, 부천역 3번출구 도보 5분거리 아이비하우스입니다.",
    imgPath: "/www/img/master_11.jpg",
    spanList: [{className: "school", desc: "부천대학교"}, {className: "line1", desc: "호선 부천역 인근"}]
}, {
    id: "57fe101c48b3063022eb5f41",
    fullName: "스타원룸 리빙텔 홍대점",
    name: "스타원룸 리빙텔 홍대점",
    desc: "홍대입구역 9번출구/합정역 3번출구/홍대거리에 위치한 스타원룸 리빙텔 홍대점입니다.",
    imgPath: "/www/img/master_12.jpg",
    spanList: [{className: "school", desc: "홍익대"}, {className: "line2", desc: "호선 홍대입구역, 합정역 인근"}]
}, {
    id: "57fe101c48b3063022eb5d24",
    fullName: "코코리빙텔 서울대점",
    name: "코코리빙텔 서울대점",
    desc: "서울대입구역 도보 5분! 싱글족을 위한 보증금이 없는 월세 선불형의 신개념 주거공간",
    imgPath: "/www/img/cocoseoul.jpg",
    spanList: [{className: "school", desc: "서울대"}, {className: "line2", desc: "호선 서울대입구역 인근"}]
}, {
    id: "57fe101c48b3063022eb5de6",
    fullName: "플러스하우스 영등포점",
    name: "플러스하우스 영등포점",
    desc: "영등포역 도보 5분 살기 좋은 생활공간 플러스하우스입니다.",
    imgPath: "/www/img/plushouse.jpg",
    spanList: [{className: "line1", desc: "호선 영등포역 인근"}]
}, {
    id: "597b0d41528cb3d25ee81524",
    fullName: "싱글하우스 주안역점",
    name: "싱글하우스 주안역점",
    desc: "주안역에서 도보 8분거리에 있는 싱글하우스 주안역점입니다.",
    imgPath: "/www/img/dia_5.jpg",
    spanList: [{className: "line1", desc: "호선 주안역 인근"}]
}, {
    id: "59ca152dc226e25878940b14",
    fullName: "코엑스 고시원",
    name: "코엑스 고시원",
    desc: "삼성역 7번 출구 도보 3분 코엑스 고시원입니다.",
    imgPath: "/www/img/master_14.jpg",
    spanList: [{className: "line2", desc: "호선 삼성역 인근"}]
}, {
    id: "59f02effbd3f18d230b6985f",
    fullName: "굿스테이 대방역점",
    name: "굿스테이 대방역점",
    desc: "●2인실 보유● 풀옵션 원룸텔 굿스테이 대방역점입니다.",
    imgPath: "/www/img/master_13.jpg",
    spanList: [{className: "line1", desc: "호선 대방역"}, {className: "line7", desc: "호선 보라매역 인근"}]
}, {
    id: "589f0f221f3247fb36581b22",
    fullName: "메이플하우스 서울대점",
    name: "메이플하우스 서울대점",
    desc: "서울대입구역 2번출구 청룡산쪽에 위치한 메이플하우스 서울대점입니다.",
    imgPath: "/www/img/mater_22.jpg",
    spanList: [{className: "school", desc: "서울대"}, {className: "line2", desc: "호선 서울대입구역 인근"}]
}, {
    id: "59e71703f0c8de7b16cf0ba4",
    fullName: "하이빌 고시텔",
    name: "하이빌 고시텔",
    desc: "노량진역 3번 출구, 상도역 3번 출구 도보 7분 거리에 위치한 하이빌 고시텔입니다.",
    imgPath: "/www/img/master_16.jpg",
    spanList: [{className: "line1", desc: "호선 노량진역"}, {className: "line7", desc: "호선 상도역 인근"}]
}, {
    id: "59f6c1ce18d14d5f6698abb2",
    fullName: "양재 굿스테이",
    name: "양재 굿스테이",
    desc: "★2017년 11월 신설오픈★양재역5번출구 도보 3분 거리",
    imgPath: "/www/img/master_18.jpg",
    spanList: [{className: "line3", desc: "호선 양재역 인근"}]
}, {
    id: "57fe101c48b3063022eb5eba",
    fullName: "소호리빙텔 정동점",
    name: "소호리빙텔 정동점",
    desc: "서대문역 도보 5분 거리에 위치한 소호리빙텔 정동점입니다.",
    imgPath: "/www/img/master_19.jpg",
    spanList: [{className: "line5", desc: "호선 서대문역 인근"}]
}, {
    id: "5a0a479f32ad342050d6c657",
    fullName: "파인리빙텔 경희2호점",
    name: "파인리빙텔 경희2호점",
    desc: "★첫달 3만원 할인 이벤트 ★ 경희대학교와 도보 3분 거리에 위치해 있습니다.",
    imgPath: "/www/img/master_20.jpg",
    spanList: [{className: "school", desc: "경희대학교"}, {className: "line1", desc: "호선 회기역 인근"}]
}, {
    id: "5a1e7caaf6326d9d383c5ffe",
    fullName: "보보 레지던스 테헤란로점",
    name: "보보 레지던스 테헤란로점",
    desc: "선릉역 10번 출구 도보 5거리에 있는 보보레지던스입니다.",
    imgPath: "/www/img/master_21.jpg",
    spanList: [{className: "line2", desc: "호선"}, {className: "bundang", desc: "선 선릉역 인근"}]
}, {
    id: "5a25169a8bc5b1ef41177fe2",
    fullName: "리빙고시텔",
    name: "리빙고시텔",
    desc: "영등포구청역 6번출구 에서 도보 5분 거리 리빙고시텔입니다.",
    imgPath: "/www/img/master_23.jpg",
    spanList: [{className: "line2", desc: ""}, {className: "line5", desc: "호선 영등포구청역 인근"}]
}, {
    id: "57fe101c48b3063022eb5e79",
    fullName: "허브 레지던스 교대점",
    name: "허브 레지던스 교대점",
    desc: "교대역 6번출구에서 1분거리 풀옵션 원룸텔!",
    imgPath: "/www/img/master_24.jpg",
    spanList: [{className: "school", desc: "교대"}, {className: "line2", desc: ""}, {
        className: "line3",
        desc: "호선 교대역 인근"
    }]
}, {
    id: "5a3a639ecd93abf249ad6cfc",
    fullName: "내자리 원룸텔",
    name: "내자리 원룸텔",
    desc: "★신축★2017년 11월 OPEN! 풀옵션 원룸텔 내자리 원룸텔!",
    imgPath: "/www/img/master_25.jpg",
    spanList: [{className: "school", desc: "서울대"}, {className: "line2", desc: "호선 서울대입구역 인근"}]
}, {
    id: "5a24fc784d07bbff4160aff7",
    fullName: "휴식 사가정 본점",
    name: "휴식 사가정 본점",
    desc: "★12월 신설오픈★ 사가정역 4번출구 도보 1분 풀옵션 레지던스",
    imgPath: "/www/img/master_26.jpg",
    spanList: [{className: "school", desc: "서일대"}, {className: "line7", desc: "호선 사가정역 인근"}]
}, {
    id: "5a683b6a800511781ce6a5d0",
    fullName: "부천 에이스리빙텔",
    name: "부천 에이스리빙텔",
    desc: "부천역 도보 5분거리 풀옵션 에이스리빙텔입니다.",
    imgPath: "/www/img/master_27.jpg",
    spanList: [{className: "line1", desc: "호선 부천역 인근"}]
}, {
    id: "5a742a039063bcc56dabb3ed",
    fullName: "삼성고시텔",
    name: "삼성고시텔",
    desc: "신풍역 4번 출구 도보 7분거리에 위치한 삼성 고시텔입니다.",
    imgPath: "/www/img/master_28.jpg",
    spanList: [{className: "line7", desc: "호선 신풍역 인근"}]
}, {
    id: "57fe101c48b3063022eb5f86",
    fullName: "네오빌",
    name: "네오빌",
    desc: "경희대학교 국제캠퍼스 바로 앞에 위치한 네오빌입니다.",
    imgPath: "/www/img/master_6.jpg",
    spanList: [{className: "school", desc: "경희대 국제캠"}, {className: "bundang", desc: "선 영통역 인근"}]
}, {
    id: "58eb509b1e0daa8b3bc0f8b2",
    fullName: "이삭미니텔 종각점",
    name: "이삭미니텔 종각점",
    desc: "인사동거리에 위치한 이삭미니텔 종각점입니다.",
    imgPath: "/www/img/master_32.jpg",
    spanList: [{className: "line1", desc: "호선 종각역 인근"}]
}, {
    id: "5a9221bc52c7af0317915095",
    fullName: "찰스고시텔",
    name: "찰스고시텔",
    desc: "홍대 입구역 8번출구 도보 3분거리에 위치해 있습니다.",
    imgPath: "/www/img/master_37.jpg",
    spanList: [{className: "school", desc: "홍익대"}, {className: "line2", desc: "호선 홍대입구역 인근"}]
}, {
    id: "5aaf3796c0202ec53fbd8ebc",
    fullName: "예솔 하우스",
    name: "예솔 하우스",
    desc: "❖첫달 할인❖ 역삼역 3번출구 도보 1분거리에 위치한 예솔하우스입니다.",
    imgPath: "/www/img/master_34.jpg",
    spanList: [{className: "line2", desc: "호선 역삼역 인근"}]
}, {
    id: "5af29b948e725d1c137b81c6",
    fullName: "청담 원룸텔",
    name: "청담 원룸텔",
    desc: "★여성전용★ 숙명여대 도보 1분거리에 위치한 청담 원룸텔입니다.",
    imgPath: "/www/img/master_43.jpg",
    spanList: [{className: "school", desc: "숙명여대"}, {className: "line4", desc: "호선 숙명여대역 인근"}]
}, {
    id: "58be74cc3a4e765a6254d325",
    fullName: "힐리빙텔 용산전자랜드점",
    name: "힐리빙텔 용산전자랜드점",
    desc: "용산역 3번출구 도보 10분거리에 위치한 힐리빙텔입니다.",
    imgPath: "/www/img/master_36.jpg",
    spanList: [{className: "line1", desc: "호선 용산역 인근"}]
}, {
    id: "598be5754ca2aa6e354aa21a",
    fullName: "해피하우스 대방점",
    name: "해피하우스 대방점",
    desc: "대방역, 신길역 1번출구 도보 7분, 여의도 차량 10분 해피하우스입니다.",
    imgPath: "/www/img/master_38.jpg",
    spanList: [{className: "line1", desc: "호선 대방역, 신길역 인근"}]
}, {
    id: "5ad98573b4170a2642e227be",
    fullName: "굿스테이원룸텔 성균관대점",
    name: "굿스테이원룸텔 성균관대점",
    desc: "성균관대 정문 3분거리에 위치한 굿스테이원룸텔 성균관대점입니다.",
    imgPath: "/www/img/master_39.jpg",
    spanList: [{className: "school", desc: "성균관대"}, {className: "line4", desc: "호선 혜화역 인근"}]
}, {
    id: "5ad4acdfd5758b9809e3e6a6",
    fullName: "홈스테이드",
    name: "홈스테이드",
    desc: "대방역 5분거리 풀옵션 고시원 홈스테이드 입니다.",
    imgPath: "/www/img/master_40.jpg",
    spanList: [{className: "line1", desc: "호선 대방역 인근"}]
}, {
    id: "5ae7ffeaf0ce507a63b4a08b",
    fullName: "도도하우스",
    name: "도도하우스",
    desc: "강남구청역 4번출구 도보 1분거리 초역세권 도도하우스입니다.",
    imgPath: "/www/img/master_41.jpg",
    spanList: [{className: "line7", desc: "호선 강남구청역 인근"}]
}, {
    id: "57fe101c48b3063022eb5d91",
    fullName: "도곡 레지던스",
    name: "도곡 레지던스",
    desc: "양재역 3번 출구에서 도보4~5분 거리에 위치한 도곡 레지던스입니다.",
    imgPath: "/www/img/master_42.jpg",
    spanList: [{className: "line3", desc: "호선 양재역 인근"}]
}]

export const DiamondList = [{
    id: "58c0c2003a4e765a6254d330",
    fullName: "굿모닝럭스텔 숙대역점",
    name: "굿모닝럭스텔 숙대역점",
    desc: "숙대역, 남영역 도보 3분에 위치한 굿모닝럭스텔 숙대역점입니다.",
    imgPath: "/www/img/goodmorning.jpg",
    spanList: [{className: "school", desc: "숙명여대"}, {className: "line4", desc: "호선 숙대입구역"}, {
        className: "line1",
        desc: "호선 남영역 인근"
    }]
}, {
    id: "59439d3467dc19a170612dce",
    fullName: "풀하우스 수유점",
    name: "풀하우스 수유점",
    desc: "4호선 수유역 8번출구 도보 3분거리 풀하우스 수유점입니다.",
    imgPath: "/www/img/suyufull.jpg",
    spanList: [{className: "line4", desc: "호선 수유역 인근"}]
}, {
    id: "593ded6767dc19a170612bb5",
    fullName: "신사 고시텔",
    name: "신사 고시텔",
    desc: "신사역 8번 출구 도보로 5분이내 거리에 위치한 조용하고 깨끗한 신사 원룸 고시텔입니다.",
    imgPath: "/www/img/sinsa.jpg",
    spanList: [{className: "line3", desc: "호선 신사역 인근"}]
}, {
    id: "58dc9b273a4e765a6254d41a",
    fullName: "에이플러스 리빙텔",
    name: "에이플러스 리빙텔",
    desc: "신촌역 5분거리에 위치한 에이플러스 리빙텔입니다.",
    imgPath: "/www/img/aplus.jpg",
    spanList: [{className: "school", desc: "연세대, 이화여대"}, {className: "line2", desc: "호선 신촌역 인근"}]
}, {
    id: "590065918312279d18f7b898",
    fullName: "에덴고시원 성신여대점",
    name: "에덴고시원 성신여대점",
    desc: "성신여대역 도보 5분거리 에덴고시원입니다.",
    imgPath: "/www/img/eden_ss.jpg",
    spanList: [{className: "school", desc: "성신여대"}, {className: "line4", desc: "호선 성신여대역 인근"}]
}, {
    id: "5acda37f9f604fbd26686277",
    fullName: "뉴굿모닝럭스텔 남영역점",
    name: "뉴굿모닝럭스텔 남영역점",
    desc: "남영역 도보 1분거리에 위치한 뉴굿모닝럭스텔입니다.",
    imgPath: "/www/img/dia_30.jpg",
    spanList: [{className: "school", desc: "숙명여대"}, {className: "line1", desc: "호선 남영역 인근"}]
}, {
    id: "58db4da13a4e765a6254d408",
    fullName: "근영 고시텔 (여성전용)",
    name: "근영 고시텔 (여성전용)",
    desc: "●여성전용● 회기역 1번 출구 1분거리 근영 고시텔니다.",
    imgPath: "/www/img/gyoung.jpg",
    spanList: [{className: "school", desc: "경희대, 외대"}, {className: "line1", desc: "호선 회기역 인근"}]
}, {
    id: "58d0fe593a4e765a6254d3c7",
    fullName: "꿈을 향한 고시텔",
    name: "꿈을 향한 고시텔",
    desc: "혜화역 4번출구 도보 3분거리에 위치한 꿈을향한고시텔입니다.",
    imgPath: "/www/img/fordream.jpg",
    spanList: [{className: "school", desc: "성균관대"}, {className: "line4", desc: "호선 혜화역 인근"}]
}, {
    id: "5adee13ad3d98944748baad3",
    fullName: "해피하우스 잠실새내점",
    name: "해피하우스 잠실새내점",
    desc: "해피하우스입니다.",
    imgPath: "/www/img/dia_35.jpg",
    spanList: [{className: "line2", desc: "호선 잠실새내역 인근"}]
}, {
    id: "5ae8073772ffd3a56058bb06",
    fullName: "펠리즈 원룸텔",
    name: "펠리즈 원룸텔",
    desc: "&#9679;오픈할인&#9679; 서울역 도보 5분거리에 위치한 신축 풀옵션 펠리즈 원룸텔입니다.",
    imgPath: "/www/img/dia_36.jpg",
    spanList: [{className: "line4", desc: "호선 서울역 인근"}]
}, {
    id: "57fe101c48b3063022eb5e42",
    fullName: "필 고시텔",
    name: "필 고시텔",
    desc: "왕십리역/한양대 정문에서 3~4분거리에 위치한 필 고시텔입니다.",
    imgPath: "/www/img/feelgosi.jpg",
    spanList: [{className: "school", desc: "한양대"}, {className: "line2", desc: ""}, {
        className: "line5",
        desc: "호선 왕십리역 인근"
    }]
}, {
    id: "589d5a4a1f3247fb36581adf",
    fullName: "씨틸하우스 양재점",
    name: "씨틸하우스 양재점",
    desc: "3호선 양재역 4번출구에서 도보 5분거리에 위치한 씨틸하우스 양재점입니다.",
    imgPath: "/www/img/citile.jpg",
    spanList: [{className: "line3", desc: "호선 양재역 인근"}]
}, {
    id: "57fe101c48b3063022eb5de6",
    fullName: "플러스하우스 영등포점",
    name: "플러스하우스 영등포점",
    desc: "영등포역 도보 5분 살기 좋은 생활공간 플러스하우스입니다.",
    imgPath: "/www/img/plushouse.jpg",
    spanList: [{className: "line1", desc: "호선 영등포역 인근"}]
}, {
    id: "581af780b867a9b02a8db624",
    fullName: "으뜸 고시텔",
    name: "으뜸 고시텔",
    desc: "혜화역 4번출구 성균관대학교 근처에 위치한 으뜸 고시텔입니다.",
    imgPath: "/www/img/euddeum.jpg",
    spanList: [{className: "school", desc: "성균관대"}, {className: "line4", desc: "호선 혜화역 인근"}]
}, {
    id: "58ff38e8102849c910809bd7",
    fullName: "코아 리빙텔 성신여대점 (여성전용)",
    name: "코아 리빙텔 성신여대점 (여성전용)",
    desc: "●여성전용● 성신여대역 도보 2분 코아 리빙텔입니다.",
    imgPath: "/www/img/coaliving.jpg",
    spanList: [{className: "school", desc: "성신여대"}, {className: "line4", desc: "호선 성신여대역 인근"}]
}, {
    id: "5acc68f6578ee5a92618e716",
    fullName: "삼성고시텔",
    name: "삼성고시텔",
    desc: "신방화역 1번출구 도보 5분거리에 위치한 삼성고시텔 입니다.",
    imgPath: "/www/img/dia_32.jpg",
    spanList: [{className: "line9", desc: "호선 신방화역역 인근"}]
}, {
    id: "590065918312279d18f7b898",
    fullName: "에덴고시원 성신여대점",
    name: "에덴고시원 성신여대점",
    desc: "성신여대역 도보 5분거리 에덴고시원입니다.",
    imgPath: "/www/img/eden_ss.jpg",
    spanList: [{className: "school", desc: "성신여대"}, {className: "line4", desc: "호선 성신여대역 인근"}]
}, {
    id: "596886071723d15316e41b1f",
    fullName: "코코리빙텔 상봉점",
    name: "코코리빙텔 상봉점",
    desc: "망우역 1번 출구에서 도보 5분거리에 위치한 코코리빙텔 상봉점입니다.",
    imgPath: "/www/img/dia_17.jpg",
    spanList: [{className: "jungang", desc: "선 망우역 인근"}]
}, {
    id: "57fe101c48b3063022eb5f2b",
    fullName: "자이언빌",
    name: "자이언빌",
    desc: "이대역 5분거리에 위치한 자이언빌입니다.",
    imgPath: "/www/img/zionvile.jpg",
    spanList: [{className: "school", desc: "이화여대"}, {className: "line2", desc: "호선 이대역 인근"}]
}, {
    id: "5891a6d91f3247fb3658199d",
    fullName: "한림 고시원",
    name: "한림 고시원",
    desc: "신림역 대학동에 위치한 한림고시원입니다.",
    imgPath: "/www/img/hanrim.jpg",
    spanList: [{className: "school", desc: "서울대"}, {className: "line2", desc: "호선 신림역 인근"}]
}, {
    id: "57fe101c48b3063022eb5d24",
    fullName: "코코리빙텔 서울대점",
    name: "코코리빙텔 서울대점",
    desc: "서울대입구역 도보 5분! 싱글족을 위한 보증금이 없는 월세 선불형의 신개념 주거공간",
    imgPath: "/www/img/cocoseoul.jpg",
    spanList: [{className: "school", desc: "서울대"}, {className: "line2", desc: "호선 서울대입구역 인근"}]
}, {
    id: "57fe101c48b3063022eb5c9c",
    fullName: "백마 고시텔 경희대점",
    name: "백마 고시텔 경희대점",
    desc: "경희대 정문, 경희치대 1분 거리 백마 고시텔입니다.",
    imgPath: "/www/img/beakma.jpg",
    spanList: [{className: "school", desc: "경희대"}, {className: "line1", desc: "호선 회기역 인근"}]
}, {
    id: "5a7cf911983bb45241b74541",
    fullName: "건대 고시원",
    name: "건대 고시원",
    desc: "어린이대공원역 도보 7분거리에 위치한 건대고시원입니다.",
    imgPath: "/www/img/dia_25.jpg",
    spanList: [{className: "school", desc: "건대 세종대"}, {className: "line7", desc: "호선 어린이대공원역"}]
}, {
    id: "5acc447d4427487d25ae0184",
    fullName: "로얄 리빙텔",
    name: "로얄 리빙텔",
    desc: "홍대입구역 3번출구 도보 7분 연남동 로얄리빙텔 입니다.",
    imgPath: "/www/img/dia_31.jpg",
    spanList: [{className: "school", desc: "홍익대"}, {className: "line2", desc: "호선 홍대입구역 인근"}]
}, {
    id: "598eaec0cbd916365b3c4510",
    fullName: "드림 하우스",
    name: "드림 하우스",
    desc: "★신축 오픈★ 잠실역 10번출구에서 도보 10분 거리에 위치해 있습니다.",
    imgPath: "/www/img/dia_3.jpg",
    spanList: [{className: "line2", desc: ""}, {className: "line8", desc: "호선 잠실역 인근"}]
}, {
    id: "589d88011f3247fb36581b15",
    fullName: "W레지던스 삼성병원점",
    name: "W레지던스 삼성병원점",
    desc: "대청역 3번출구에서 15분거리에 위치한 W레지던스 삼성병원점입니다.",
    imgPath: "/www/img/dia_2.jpg",
    spanList: [{className: "line3", desc: "호선 대청역 인근"}]
}, {
    id: "5a83c85b59cde209091af516",
    fullName: "N-고시텔",
    name: "N-고시텔",
    desc: "경기대학교 서울캠퍼스  정문과 도보 2분거리에 위치해 있습니다.",
    imgPath: "/www/img/dia_27.jpg",
    spanList: [{className: "school", desc: "경기대"}, {className: "line5", desc: "호선 서대문역 인근"}]
}, {
    id: "590065918312279d18f7b898",
    fullName: "에덴고시원 성신여대점",
    name: "에덴고시원 성신여대점",
    desc: "성신여대역 도보 5분거리 에덴고시원입니다.",
    imgPath: "/www/img/eden_ss.jpg",
    spanList: [{className: "school", desc: "성신여대"}, {className: "line4", desc: "호선 성신여대역 인근"}]
}, {
    id: "581af39fb867a9b02a8db621",
    fullName: "생명나무미니텔",
    name: "생명나무미니텔",
    desc: "혜화역 4번출구에서 도보5분 거리에 위치한 생명나무미니텔입니다.",
    imgPath: "/www/img/dia_26.jpg",
    spanList: [{className: "school", desc: "성균관대"}, {className: "line4", desc: "호선 혜화역"}]
}, {
    id: "58e207be1e0daa8b3bc0f7a1",
    fullName: "소호 종로 고시원",
    name: "소호 종로 고시원",
    desc: "종각역 1번 출구에서 도보 3분거리에 위치한 소호종로고시원입니다.",
    imgPath: "/www/img/sohojongro.jpg",
    spanList: [{className: "line1", desc: "호선 종각역 인근"}]
}, {
    id: "595f44ee1723d15316e41985",
    fullName: "드림고시텔",
    name: "드림고시텔",
    desc: "성수역 1번출구에서 5분거리에 위치한 드림고시텔입니다.",
    imgPath: "/www/img/dia_34.jpg",
    spanList: [{className: "line2", desc: "호선 성수역 인근"}]
}, {
    id: "59b76f1e83299b870b0f1ef3",
    fullName: "애플 하우스",
    name: "애플 하우스",
    desc: "노량진 도보 10분 원룸텔, 공부방 애플 하우스입니다.",
    imgPath: "/www/img/dia_8.jpg",
    spanList: [{className: "line1", desc: "호선 노량진역 인근"}]
}, {
    id: "57fe101c48b3063022eb5ec6",
    fullName: "코코레지던스 을지로점",
    name: "코코레지던스 을지로점",
    desc: "을지로3가역 30초거리에 있는 조용하고 깨끗한 초역세권 고시원!",
    imgPath: "/www/img/dia_9.jpg",
    spanList: [{className: "line2", desc: ""}, {className: "line3", desc: "호선 을지로 3가역 인근"}]
}, {
    id: "57fe101c48b3063022eb5eee",
    fullName: "스마텔 고시원",
    name: "스마텔 고시원",
    desc: "혜화역 1번출구에서 1분거리에 위치한 스마텔 고시원입니다.",
    imgPath: "/www/img/dia_10.jpg",
    spanList: [{className: "line4", desc: "호선 혜화역 인근"}]
}, {
    id: "58b42bf53a4e765a6254d310",
    fullName: "스위트 리빙텔 서초점",
    name: "스위트 리빙텔 서초점",
    desc: "서초역 2번출구에서 3분거리에 위치한 스위트 리빙텔 서초점입니다.",
    imgPath: "/www/img/dia_11.jpg",
    spanList: [{className: "line2", desc: "호선 서초역 인근"}]
}, {
    id: "590065918312279d18f7b898",
    fullName: "에덴고시원 성신여대점",
    name: "에덴고시원 성신여대점",
    desc: "성신여대역 도보 5분거리 에덴고시원입니다.",
    imgPath: "/www/img/eden_ss.jpg",
    spanList: [{className: "school", desc: "성신여대"}, {className: "line4", desc: "호선 성신여대역 인근"}]
}, {
    id: "58cf9ad13a4e765a6254d3c4",
    fullName: "드림리빙텔 장안점",
    name: "드림리빙텔 장안점",
    desc: "장안동 사거리에 위치한 드림리빙텔 장안점입니다.",
    imgPath: "/www/img/dia_15.jpg",
    spanList: [{className: "line5", desc: "호선 장한평역 인근"}]
}, {
    id: "57fe101c48b3063022eb5e03",
    fullName: "허브레지던스 잠실새내점",
    name: "허브레지던스 잠실새내점",
    desc: "가격할인행사중@ 2호선 신천역과 9호선 종합운동장 사이에 있는 허브 레지던스 입니다.",
    imgPath: "/www/img/dia_14.jpg",
    spanList: [{className: "line2", desc: "호선 잠실새내역, 종합운동장역 인근"}]
}, {
    id: "59e57c76db630a6b70c98285",
    fullName: "마이홈리빙텔 상도점",
    name: "마이홈리빙텔 상도점",
    desc: "상도역 2번출구 도보 5분거리에 위치한 마이홈리빙텔 상도점입니다.",
    imgPath: "/www/img/dia_16.jpg",
    spanList: [{className: "line7", desc: "호선 상도역 인근"}]
}, {
    id: "58049a8668ec91e2220004ba",
    fullName: "엘리트 리빙텔 한성대점",
    name: "엘리트 리빙텔 한성대점",
    desc: "4호선 한성대역 7번출구에서 도보1분거리에 위치한 엘리트리빙텔입니다.",
    imgPath: "/www/img/elete_hansung.jpg",
    spanList: [{className: "school", desc: "한성대학교"}, {className: "line4", desc: "호선 한성대입구역 인근"}]
}, {
    id: "5a0a79721363f0de52716f61",
    fullName: "올컴 고시원",
    name: "올컴 고시원",
    desc: " 백석역 6번 출구 도보 1분 거리에 위치한 올컴 고시원입니다.",
    imgPath: "/www/img/dia_18.jpg",
    spanList: [{className: "line3", desc: "호선 백석역 인근"}]
}, {
    id: "5a1ccc15f93d4191382181b6",
    fullName: "글로리아 원룸텔",
    name: "글로리아 원룸텔",
    desc: "서울대입구역 8번출구 도보 5분 글로리아 원룸텔입니다.",
    imgPath: "/www/img/dia_19.jpg",
    spanList: [{className: "school", desc: "서울대"}, {className: "line2", desc: "호선 서울대입구역 인근"}]
}, {
    id: "58915d801f3247fb3658197b",
    fullName: "비전하우스 구로점",
    name: "비전하우스 구로점",
    desc: "구로디지털단지역 1번출구 2분거리에 위치한 비전하우스 입니다.",
    imgPath: "/www/img/dia_28.jpg",
    spanList: [{className: "line2", desc: "호선 구로디지털단지역 인근"}]
}, {
    id: "59a3e77230a855907c9f2eb6",
    fullName: "한림리빙텔",
    name: "한림리빙텔",
    desc: "둔촌동역 4번 출구에서 30초거리에 위치한 한림리빙텔입니다.",
    imgPath: "/www/img/dia_33.jpg",
    spanList: [{className: "line5", desc: "호선 둔촌동역 인근"}]
}, {
    id: "5886e1a080a45d1b172457ac",
    fullName: "리빙고시텔",
    name: "리빙고시텔",
    desc: "화양사거리에 위치한 리빙고시텔입니다.",
    imgPath: "/www/img/dia_22.jpg",
    spanList: [{className: "school", desc: "세종대"}, {className: "line7", desc: "호선 어린이대공원역 인근"}]
}, {
    id: "58db0d803a4e765a6254d403",
    fullName: "e-편한 고시원",
    name: "e-편한 고시원",
    desc: "회기역 1번출구 5분거리에 위치한 e-편한 고시원입니다.",
    imgPath: "/www/img/dia_22.jpg",
    spanList: [{className: "school", desc: "경희대"}, {className: "line1", desc: "호선 회기역 인근"}]
}, {
    id: "59ba2a59525f9f3f6a2b4664",
    fullName: "웰빙텔 신림점",
    name: "웰빙텔 신림점",
    desc: "신림역 5번출구에서 도보 1분거리에 위치한 웰빙텔 신림점입니다.",
    imgPath: "/www/img/dia_23.jpg",
    spanList: [{className: "line2", desc: "호선 신림역 인근"}]
}, {
    id: "58ad3c661f3247fb36581b8c",
    fullName: "캐슬고시텔 강남논현점",
    name: "캐슬고시텔 강남논현점",
    desc: "논현역 5번출구에서 5분거리내에 위치한 캐슬고시텔 강남논현점입니다.",
    imgPath: "/www/img/dia_24.jpg",
    spanList: [{className: "line7", desc: "호선 논현역 인근"}]
}, {
    id: "5af9158a5cd3200b6afa72e0",
    fullName: "베스트빌 고대점",
    name: "베스트빌 고대점",
    desc: "고려대 도보 1분거리에 위치한 베스트빌입니다.",
    imgPath: "/www/img/dia_37.jpg",
    spanList: [{className: "school", desc: "고려대"}, {className: "line6", desc: "호선 안암역 인근"}]
}, {
    id: "58db1d9f3a4e765a6254d405",
    fullName: "N마을 고시텔",
    name: "N마을 고시텔",
    desc: "★첫달할인★ 회기역 1번출구 3분거리에 위치한 N마을고시원입니다.",
    imgPath: "/www/img/dia_38.jpg",
    spanList: [{className: "school", desc: "경희대"}, {className: "line1", desc: "호선 회기역 인근"}]
}, {
    id: "58ff38e8102849c910809bd7",
    fullName: "코아 리빙텔 성신여대점 (여성전용)",
    name: "코아 리빙텔 성신여대점 (여성전용)",
    desc: "●여성전용● 성신여대역 도보 2분 코아 리빙텔입니다.",
    imgPath: "/www/img/coaliving.jpg",
    spanList: [{className: "school", desc: "성신여대"}, {className: "line4", desc: "호선 성신여대역 인근"}]
}, {
    id: "5acc68f6578ee5a92618e716",
    fullName: "삼성고시텔",
    name: "삼성고시텔",
    desc: "신방화역 1번출구 도보 5분거리에 위치한 삼성고시텔 입니다.",
    imgPath: "/www/img/dia_32.jpg",
    spanList: [{className: "line9", desc: "호선 신방화역역 인근"}]
}, {
    id: "590065918312279d18f7b898",
    fullName: "에덴고시원 성신여대점",
    name: "에덴고시원 성신여대점",
    desc: "성신여대역 도보 5분거리 에덴고시원입니다.",
    imgPath: "/www/img/eden_ss.jpg",
    spanList: [{className: "school", desc: "성신여대"}, {className: "line4", desc: "호선 성신여대역 인근"}]
}, {
    id: "596886071723d15316e41b1f",
    fullName: "코코리빙텔 상봉점",
    name: "코코리빙텔 상봉점",
    desc: "망우역 1번 출구에서 도보 5분거리에 위치한 코코리빙텔 상봉점입니다.",
    imgPath: "/www/img/dia_17.jpg",
    spanList: [{className: "jungang", desc: "선 망우역 인근"}]
}, {
    id: "57fe101c48b3063022eb5f2b",
    fullName: "자이언빌",
    name: "자이언빌",
    desc: "이대역 5분거리에 위치한 자이언빌입니다.",
    imgPath: "/www/img/zionvile.jpg",
    spanList: [{className: "school", desc: "이화여대"}, {className: "line2", desc: "호선 이대역 인근"}]
}, {
    id: "5891a6d91f3247fb3658199d",
    fullName: "한림 고시원",
    name: "한림 고시원",
    desc: "신림역 대학동에 위치한 한림고시원입니다.",
    imgPath: "/www/img/hanrim.jpg",
    spanList: [{className: "school", desc: "서울대"}, {className: "line2", desc: "호선 신림역 인근"}]
}, {
    id: "57fe101c48b3063022eb5d24",
    fullName: "코코리빙텔 서울대점",
    name: "코코리빙텔 서울대점",
    desc: "서울대입구역 도보 5분! 싱글족을 위한 보증금이 없는 월세 선불형의 신개념 주거공간",
    imgPath: "/www/img/cocoseoul.jpg",
    spanList: [{className: "school", desc: "서울대"}, {className: "line2", desc: "호선 서울대입구역 인근"}]
}, {
    id: "57fe101c48b3063022eb5c9c",
    fullName: "백마 고시텔 경희대점",
    name: "백마 고시텔 경희대점",
    desc: "경희대 정문, 경희치대 1분 거리 백마 고시텔입니다.",
    imgPath: "/www/img/beakma.jpg",
    spanList: [{className: "school", desc: "경희대"}, {className: "line1", desc: "호선 회기역 인근"}]
}, {
    id: "5a7cf911983bb45241b74541",
    fullName: "건대 고시원",
    name: "건대 고시원",
    desc: "어린이대공원역 도보 7분거리에 위치한 건대고시원입니다.",
    imgPath: "/www/img/dia_25.jpg",
    spanList: [{className: "school", desc: "건대 세종대"}, {className: "line7", desc: "호선 어린이대공원역"}]
}, {
    id: "5acc447d4427487d25ae0184",
    fullName: "로얄 리빙텔",
    name: "로얄 리빙텔",
    desc: "홍대입구역 3번출구 도보 7분 연남동 로얄리빙텔 입니다.",
    imgPath: "/www/img/dia_31.jpg",
    spanList: [{className: "school", desc: "홍익대"}, {className: "line2", desc: "호선 홍대입구역 인근"}]
}]