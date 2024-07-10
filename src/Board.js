import React, { Component, useEffect, useState } from 'react';
// import Button from 'react-bootstrap/Button';
import BoardMenu from './BoardMenu';
import BoardList from './BoardList';
import Option from './Option';


function Board(){
  const [isShown, setIsShown] = useState(false);

  const handleToggle = () => {
    setIsShown(!isShown);
  };
  return (
    <>
    <div className="modal_board">
      <div className={`board_wrap ${isShown ? 'show' : ''}`}>
        <div className="board_head df aic">
          <div className="btn_wrap df aic">
          <button className="close_btn modal_btn" onClick={handleToggle}></button>
            <span className="modal_btn"></span>
            <span className="modal_btn"></span>
          </div>
          <h3>Board</h3>
        </div>
        <div className="board_body df">
          <BoardMenu></BoardMenu>
          <div className="board_ct">
            <BoardList></BoardList>
            <div class="btn-group me-2" role="group" aria-label="First group">
              <button type="button" class="btn btn-outline-secondary">1</button>
              <button type="button" class="btn btn-outline-secondary">2</button>
              <button type="button" class="btn btn-outline-secondary">3</button>
            </div>
          </div>
        </div>
      </div>
      <Option isShown={isShown} handleToggle={handleToggle} />
    </div>  
    </>
  );
}

export default Board;