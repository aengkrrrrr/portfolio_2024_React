import React, { useState, useEffect } from 'react';
// import Button from 'react-bootstrap/Button';
import ViewImg from './images/view_img.png';

function View() {

  return (
    <>
      <div className="view_wrap df aic">
        <div className="img_wrap">
          <img src={ViewImg} alt='게시판 작성 이미지' />
        </div>
        <form className="view_ct_wrap">
          <div className="view_ct df aic">
            <strong>제목입니다.</strong>
            <em>17:15</em>
          </div>
          <p>정말 멋진 포트폴리오 페이지입니다. 나는 당신을 당장 채용하고 싶다. 정말 멋진 포트폴리오 페이지입니다. 나는 당신을 당장 채용하고 싶다. 정말 멋진 포트폴리오 페이지입니다. 나는 당신을 당장 채용하고 싶다.</p>
          <div className="view_btn_wrap df aic">
            <button type="button" className="btn btn-secondary">수정</button>
            <button type="button" className="btn btn-danger">삭제</button>
            <a href=""><span className="material-symbols-outlined">reply</span></a>
          </div>
        </form>
      </div>

    </>
  )
}

export default View;