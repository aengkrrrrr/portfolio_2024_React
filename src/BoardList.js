import React, { Component, useEffect, useState } from 'react';
// import Button from 'react-bootstrap/Button';
import BoardMenu from './BoardMenu';
import OptionMenu from './OptionMenu';
import ListImg from './images/chu_image.png';

function BoardList(){
  return (
    <>
    <div className="modal_board">
      <div id="board_wrap" className={isShown ? 'show' : 'hide'} >
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
            <ul class="board_list df fdc aic">
              <li class="list df aic">
              <img src={ListImg} alt='게시판 이미지' />
                <div class="list_ct df fdc">
                  <strong>제목입니다.</strong>
                  <p>정말 멋진 포트폴리오 페이지입니다. 나는 당신을 당장 채용하고 싶다.</p>
                </div>
                <em>17:15</em>
              </li>
              <li class="list df aic">
              <img src={ListImg} alt='게시판 이미지' />
                <div class="list_ct df fdc">
                  <strong>제목입니다.</strong>
                  <p>정말 멋진 포트폴리오 페이지입니다. 나는 당신을 당장 채용하고 싶다.</p>
                </div>
                <em>17:15</em>
              </li>
              <li class="list df aic">
              <img src={ListImg} alt='게시판 이미지' />
                <div class="list_ct df fdc">
                  <strong>제목입니다.</strong>
                  <p>정말 멋진 포트폴리오 페이지입니다. 나는 당신을 당장 채용하고 싶다.</p>
                </div>
                <em>17:15</em>
              </li>
              <li class="list df aic">
              <img src={ListImg} alt='게시판 이미지' />
                <div class="list_ct df fdc">
                  <strong>제목입니다.</strong>
                  <p>정말 멋진 포트폴리오 페이지입니다. 나는 당신을 당장 채용하고 싶다.</p>
                </div>
                <em>17:15</em>
              </li>
            </ul>
            <div class="btn-group me-2" role="group" aria-label="First group">
              <button type="button" class="btn btn-outline-secondary">1</button>
              <button type="button" class="btn btn-outline-secondary">2</button>
              <button type="button" class="btn btn-outline-secondary">3</button>
            </div>
          </div>
          </div>
      </div>
    </div>  
    </>
  );
}

export default BoardList;