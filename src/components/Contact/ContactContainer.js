import React, {Component, ReactDOM} from 'react';
import $ from 'jquery'

const cursor = {cursor: 'pointer'}

class ContactContainer extends Component {

    componentDidMount() {
        $('body.forsupplier ul#info li#info_1 a').on('click', function () {
            $('body.forsupplier div.popup').css({'display': 'block'});
        });

        $('body.forsupplier div.popup p > a.cancel').on('click', function () {
            $('body.forsupplier div.popup').css({'display': 'none'});
        });

        $('body.forsupplier div.popup div.cancel').on('click', function () {
            $('body.forsupplier div.popup').css({'display': 'none'});
        });

        $('body.forsupplier a.faq').on('click', function () {
            $('body.forsupplier div.popup').css({'display': 'block'});
        });
    }

    gotoInfo(x) {
        var newHash = 'info_' + x;
        if (this.refs[newHash]) {
            this.refs[newHash].scrollIntoView()
        }
    };

    scrollTop() {
        window.scrollTo(0, 0)
    }

    doMoveKosiwonContact() {
        // if not logged in show wonjang login popup
    }

    render() {
        return (
            <div id="contentWrapper">
                <ul id="info">
                    <li id="info_1" ref="info_1">
                        <h2>스마트폰도 PC도 이제 모두 고시락!</h2>
                        <h3>고시락 무료 등록으로 고시원 홍보 한방에 해결하세요.</h3>
                        <a style={cursor} style={cursor} onClick={() => () => this.doMoveKosiwonContact('A')}>고시락 무료
                            등록</a><br/>
                        <img className="weare" alt="" src="/www/img/contact00.jpg"/><br/>
                        <img alt="" src="/www/img/contact01.jpg"/>
                    </li>
                    <li id="info_2" ref="info_2">
                        <h2>고시락만의 알찬 부가서비스!</h2>
                        <h3>고시원 홍보부터 관리까지 고시락과 함께하세요.</h3>
                        <ul className="sub">
                            <li className="first">
                                <img className="contact_sub01" alt="" src="/www/img/contact_sub01.jpg"/>
                                <h4>회원 패키지</h4>
                                <p>원장님의 고시원을 추천 고시원으로 해당 지역 상위 리스트에 올려드리고 여러가지 부가 서비스를 통해 다양한 방법으로 홍보합니다.</p>
                                <a style={cursor} onClick={() => this.gotoInfo(3)}>더보기</a>
                            </li>
                            <li className="third">
                                <img className="contact_sub02" alt="" src="/www/img/contact_sub02.jpg"/>
                                <h4>모바일 홈페이지</h4>
                                <p>입주 문의 글이 원장님에게 문자로 전송되고 스마트폰, PC 모두에 대응되고 관리도 쉬운 홈페이지를 제공해 드리는 서비스입니다. </p>
                                <a style={cursor} onClick={() => this.gotoInfo(5)}>더보기</a>
                            </li>
                            <li className="fourth">
                                <img alt="" src="/www/img/interior_thum.jpg"/>
                                <h4>인테리어</h4>
                                <p>다년간 전문적으로 고시원 인테리어를 맡아온 업체를 통해 공사를 진행합니다. 최고의 퀄리티와 거품없는 가격을 만나보세요.</p>
                                <a style={cursor} onClick={() => this.gotoInfo(6)}>더보기</a>
                            </li>
                            <li className="fifth">
                                <img alt="" src="/www/img/sales_thum.jpg"/>
                                <h4>고시원 매매</h4>
                                <p>고시원 매매를 전문적으로 진행해온 공인중개사를 통해 매매를 진행합니다. 고시락과 함께 걱정없이 편하게 진행해보세요.</p>
                                <a style={cursor} onClick={() => this.gotoInfo(7)}>더보기</a>
                            </li>
                        </ul>
                    </li>
                    <li id="info_3" ref="info_3">
                        <h2>회원 패키지 하나로 다양한 서비스를 제공합니다.</h2>
                        <h3>더 나은 홍보를 원하신다면 회원 패키지를 이용해보세요.</h3>
                        <a style={cursor} className="faq" onClick={() => this.doMoveKosiwonContact('A')}>문의하기</a><br/>
                        <img alt="" src="/www/img/contact02.jpg"/><br/>
                        <img alt="" src="/www/img/contact04.jpg"/><br/>
                        <img alt="" src="/www/img/contact03.jpg"/>
                    </li>
                    <li id="info_5" ref="info_5">
                        <h2>모바일 홈페이지</h2>
                        <p>비싼 홈페이지 제작 비용이 부담스러워서 못하고 계셨나요?<br/>홈페이지가 있어도 입실문의가 오는지 알 수 없어 불필요하다 느끼셨나요?<br/>고시락에서 제공하는
                            홈페이지는 <strong>문의글이 올라오면 원장님에게 바로 문자로 알려드립니다.</strong></p>
                        <a style={cursor} className="faq" onClick={() => this.doMoveKosiwonContact('H')}>문의하기</a><br/>
                        <img alt="" src="/www/img/contact05.jpg"/>
                    </li>
                    <li id="info_6" ref="info_6">
                        <h2>인테리어</h2>
                        <p>다년간 전문적으로 고시원 인테리어를 맡아온 업체를 통해 공사를 진행합니다.<br/>최고의 퀄리티와 거품없는 가격을 만나보세요.
                        </p>
                        <a style={cursor} className="faq" onClick={() => this.doMoveKosiwonContact('I')}>문의하기</a><br/>
                        <img alt="" src="/www/img/interior.jpg"/>
                    </li>
                    <li id="info_7" ref="info_7">
                        <h2>고시원 매매</h2>
                        <p>고시원 매매를 전문적으로 진행해온 공인중개사를 통해 매매를 진행합니다.<br/>고시락과 함께 걱정없이 편하게 진행해보세요.
                        </p>
                        <a style={cursor} className="faq" onClick={() => this.doMoveKosiwonContact('M')}>문의하기</a><br/>
                        <img alt="" src="/www/img/sale.jpg"/>
                    </li>
                </ul>
                <a style={cursor} className="top ng-scope" onClick={() => this.scrollTop(top)}>TOP</a>
                {/*<div className="popup ng-scope">
                    <p>
                        원장님이신가요?
                        <br/>
                        고시원 원장 전용 로그인 후 이용이 가능합니다.
                        <a href="sub_login.html" className="login">로그인 페이지로</a>
                        <a href="#" className="cancel">취소</a>
                    </p>
                    <div className="cancel"/>
                </div>*/}
            </div>
        );
    }
}

export default ContactContainer;
