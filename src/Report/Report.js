import React from 'react';

const Report = ({
                    question,
                    kosiwonName,
                    onGoBackClicked,
                    onChange,
                    showPopup,
                    onSave
                }) => {
    return (
        <div id="inquire">
            <h1>신고하기</h1>
            <p>{kosiwonName}</p>
            <textarea name="inquire"
                      id="question"
                      placeholder="잘못된 정보를 기재해주세요."
                      value={question}
                      onChange={onChange}/>
            <a onClick={onSave}>확인</a>
            <a onClick={onGoBackClicked}>취소</a>
            {showPopup && <div className="popup" style={{display: 'block'}}>
                <p>
                    신고가 접수되었습니다.
                    <br/>
                    빠른 시일 내에 조치하도록 하겠습니다.
                    <a onClick={onGoBackClicked}>확인</a>
                </p>
                <div className="cancel" />
            </div>}
        </div>
    );
};

export default Report;
