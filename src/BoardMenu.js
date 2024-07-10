import React, { useState, useEffect } from 'react';
import MenuImg from './images/chu_image.png';
import BoardList from './BoardList';
import Write from './Write';

function BoardMenu({showBoardList, showWrite}){

  return (
    <>
    <aside className="icon_wrap df fdc">
        <div className="icon_01 df fdc aic">
         <img src={MenuImg} alt='사용자 이미지' />
          <span>CHU</span>
        </div>
        <div className="icon_02 df fdc aic" onClick={showBoardList}>
          <button><span className="material-symbols-outlined">team_dashboard</span></button>
          <button><span>Board</span></button>
        </div>
        <div className="icon_03 df fdc aic" onClick={showWrite}>
          <button><span className="material-symbols-outlined">edit_square</span></button>
          <button><span>Write</span></button>
        </div>
        <div className="icon_04 df fdc aic">
          <button><span className="material-symbols-outlined">mail</span></button>
          <button><span>Mail</span></button>
        </div>

        <div>
       
      </div>
      </aside>
  </>
  )  
}

export default BoardMenu;