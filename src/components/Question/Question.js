import React from 'react';

const cursorStyle = {cursor:'pointer'}

const Question = ({
                      type,
                      question,
                      onGoBackClicked,
                      onSave,
                      showPopup,
                      onChange
                  }) => {
    return (
        <div className="top_line">
            <div id="faq">
                <h1>문의하기</h1>
                <label>문의유형</label>
                <select name="lowest_price" id="type" onChange={onChange}>
                    <option value="A" selected={type === 'A'}>회원 패키지</option>
                    <option value="H" selected={type === 'H'}>모바일 홈페이지</option>
                    <option value="I" selected={type === 'I'}>인테리어</option>
                    <option value="M" selected={type === 'M'}>고시원 매매</option>
                    <option value="E" selected={type === 'E'}>기타</option>
                </select>
                <textarea name="inquire" id="question" placeholder="문의 시 반드시 연락처를 함께 기재해주세요." onChange={onChange}>
                    {question}
                </textarea>
                <a className="submit" style={cursorStyle} onClick={onSave}>확인</a>
                <a onClick={onGoBackClicked}>취소</a>
                {showPopup && <div className="popup" style={{display:'block'}}>
                    <p>
                        문의가 접수되었습니다.
                        <br />
                        빠른 시일 내에 답변드리도록 하겠습니다.
                        <a onClick={onGoBackClicked}>확인</a>
                    </p>
                    <div className="cancel"/>
                </div>}
            </div>
        </div>
    );
};

export default Question;
