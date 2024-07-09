import React, { useState, useEffect } from 'react';
// import Button from 'react-bootstrap/Button';
import BoardMenu from './BoardMenu';
import WriteImg from './images/view_img.png';

function Write(){
 
  return (
    <>
     <div className="modal_board">
      <div className="board_wrap">
        <div className="board_head df aic">
          <div className="btn_wrap df aic">
            <button className="close_btn modal_btn"></button>
            <span className="modal_btn"></span>
            <span className="modal_btn"></span>
          </div>
          <h3>Board</h3>
        </div>
        <div className="board_body df">
        <BoardMenu></BoardMenu>
          <div className="board_ct">
            <div className="write_wrap df aic">
              <div className="img_wrap">
                <img src={WriteImg} alt='게시판 작성 이미지' />
              </div>
              <form className="write_ct_wrap">
                <div className="mb-3">
                  <label for="name" className="form-label">이름</label>
                  <input type="email" className="form-control" name="name" id="name" placeholder="이름을 입력하세요"/>
                </div>
                <div className="mb-4">
                  <label for="content" className="form-label">댓글</label>
                  <textarea className="form-control" name="content" id="content" rows="5" placeholder="이름을 입력하세요"></textarea>
                </div>
                <div className="write_btn_wrap df aic">
                  <button type="button" className="btn btn-primary">등록</button>
                  <a href=""><span className="material-symbols-outlined">reply</span></a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>  
  
    </>
  )  
}

export default Write;