import React, { Component } from 'react'
// import { Link } from 'react-router-dom';
import ListImg from './images/chu_image.png';

function BoardList() {
  
    return (
      <ul className="board_list df fdc aic">
      {Array(4).fill().map((_, index) => (
        <li key={index} className="list df aic">
          <img src={ListImg} alt="게시판 이미지" />
          <div className="list_ct df fdc">
            <strong>제목입니다.</strong>
            <p>정말 멋진 포트폴리오 페이지입니다. 나는 당신을 당장 채용하고 싶다.</p>
          </div>
          <em>17:15</em>
        </li>
      ))}
  </ul>
    )
  }

export default BoardList;