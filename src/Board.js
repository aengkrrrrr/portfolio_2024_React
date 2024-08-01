import React, { useState } from 'react';
import BoardMenu from './BoardMenu';
import BoardList from './BoardList';
import Write from './Write';
import View from './View';
import Option from './Option';

function Board() {
  const [isShown, setIsShown] = useState(false);
  const [activeComponent, setActiveComponent] = useState('BoardList'); // 기본적으로 'BoardList' 컴포넌트를 보이게 설정

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

  // Board 버튼을 클릭할 때 'BoardList'로 전환
  const handleBoardButtonClick = () => {
    if (activeComponent !== 'BoardList') {
      setActiveComponent('BoardList');
    }
  };

  // Write 컴포넌트의 등록 완료 후 호출될 함수
  const handleWriteSuccess = () => {
    setActiveComponent('BoardList');
  };

  return (
    <>
      <div className="modal_board">
        <div className={`board_wrap ${isShown ? 'show' : ''}`}>
          <div className="board_head df aic">
            <div className="btn_wrap df aic">
              <button className="close_btn modal_btn" onClick={handleToggle}></button>
              {/* Board 버튼 */}
              <span className="modal_btn" onClick={handleBoardButtonClick}></span>
              <span className="modal_btn"></span>
            </div>
            <h3>Board</h3>
          </div>
          <div className="board_body df">
            <BoardMenu 
              showBoardList={showBoardList} 
              showWrite={showWrite} 
              showView={showView}
            />
            <div className="board_ct">
              {activeComponent === 'BoardList' && <BoardList showView={showView} />}
              {activeComponent === 'Write' && <Write handleSuccess={handleWriteSuccess} />}
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
