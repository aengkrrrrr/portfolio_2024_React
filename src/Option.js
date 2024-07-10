import React, {} from 'react';

function Option({ isShown, handleToggle }) {

  return (
    <>
    <div className="option_wrap">
      <div className="option df aic fdc">
        <button className="board" onClick={handleToggle}><span className="material-symbols-outlined">edit_square</span></button>
        <button className="upto_top"><span className="material-symbols-outlined">north</span></button>
      </div>
      {isShown && <div className="dropdown">Dropdown Content</div>}
    </div>
  </>
  )  
}

export default Option;