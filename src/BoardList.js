import React, { Component } from 'react'
import ListImg from './images/chu_image.png';
// import Button from 'react-bootstrap/Button';

function BoardList({showView}) {

const ClickPd = (e) => {
  e.preventDefault();
  };

    return (
    <>
      <ul className="board_list df fdc aic">
          {[1, 2, 3,4].map(index => (
            <li key={index} className="list df aic">
              <img src={ListImg} alt="게시판 이미지" />
              <div className="list_ct df fdc">
               <a href="" onClick={ClickPd}>
                <strong onClick={() => showView(index)}>제목입니다.</strong>
                </a> 
                <p>정말 멋진 포트폴리오 페이지입니다. 나는 당신을 당장 채용하고 싶다.</p>
              </div>
              <em>17:15</em>
            </li>
          ))}
        </ul>
        <div className="btn-group me-2" role="group" aria-label="First group">
          <button type="button" className="btn btn-outline-secondary">1</button>
          <button type="button" className="btn btn-outline-secondary">2</button>
          <button type="button" className="btn btn-outline-secondary">3</button>
        </div>
    </>
    )
  }

export default BoardList;