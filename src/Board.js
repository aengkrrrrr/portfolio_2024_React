import React, { Component, useEffect, useState } from 'react';
// import Button from 'react-bootstrap/Button';
import BoardMenu from './BoardMenu';
import BoardList from './BoardList';
import Write from './Write';
import View from './View';
import Option from './Option';


function Board(){
  const [isShown, setIsShown] = useState(false);
  const [activeComponent, setActiveComponent] = useState(null);

  const handleToggle = () => {
    setIsShown(!isShown);
  };

  const showBoardList = () => {
    setActiveComponent('BoardList');
  };

  const showWrite = () => {
    setActiveComponent('Write');
  };

  const showView = () => {
    setActiveComponent('View');
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
          <BoardMenu showBoardList={showBoardList} showWrite={showWrite}></BoardMenu>
          <div className="board_ct">
          {activeComponent === 'BoardList' && <BoardList showView={showView} />}
          {activeComponent === 'Write' && <Write />}
          {activeComponent === 'View' && <View />}

          </div>
        </div>
      </div>
      <Option isShown={isShown} handleToggle={handleToggle} />
    </div>  
    </>
  );
}

export default Board;