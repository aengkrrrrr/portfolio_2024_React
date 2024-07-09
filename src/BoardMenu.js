import React, { useState, useEffect } from 'react';
import MenuImg from './images/chu_image.png';

function BoardMenu(){
  return (
    <>
    <aside className="icon_wrap df fdc">
        <div className="icon_01 df fdc aic">
         <img src={MenuImg} alt='사용자 이미지' />
          <span>CHU</span>
        </div>
        <div className="icon_02 df fdc aic">
          <a href=""><span className="material-symbols-outlined">team_dashboard</span></a>
          <a href=""><span>Board</span></a>
        </div>
        <div className="icon_03 df fdc aic">
          <a href=""><span className="material-symbols-outlined">edit_square</span></a>
          <a href=""><span>Write</span></a>
        </div>
        <div className="icon_04 df fdc aic">
          <a href=""><span className="material-symbols-outlined">mail</span></a>
          <a href=""><span>Mail</span></a>
        </div>
      </aside>
  </>
  )  
}

export default BoardMenu;