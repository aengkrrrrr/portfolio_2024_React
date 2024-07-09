import React, { useState, useEffect } from 'react';

function Option(){
    // 상태를 선언하고 초기값을 'hide'로 설정합니다.
    const [isShown, setIsShown] = useState(false);
  
    // 버튼을 클릭했을 때 상태를 토글하는 함수입니다.
    const handleToggle = () => {
      setIsShown(!isShown);
    };

  return (
    <>
    <div className="option_wrap">
      <div className="option df aic fdc">
        <button className="board" onClick={handleToggle}><span className="material-symbols-outlined">edit_square</span></button>
        <button className="upto_top"><span className="material-symbols-outlined">north</span></button>
      </div>
    </div>
  </>
  )  
}

export default Option;