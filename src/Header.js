import React, { useState, useEffect } from 'react';
import imgLogo from './logo.png';

function Header(){
  return (
    <>
    <header id="header">
      <div className="header_ct df aic">
        <h1 className="logo">
          <img src={imgLogo} alt='logo' />
        </h1>
        <nav>
          <ul className="gnb_wrap df">
            <li><a className="intro_sc" href="#">Home</a></li>
            <li><a className="intro_ab" href="#">About</a></li>
            <li><a className="intro_pj" href="#">Project</a></li>
            <li><a className="intro_ct" href="#">Contact</a></li>
          </ul>
        </nav>
        <div className="util_wrap">
          <ul className="util df">
            <li><a href="https://petite-nigella-ec4.notion.site/8bf7923a4aad44e788fb46677f057cf9?pvs=4" target="_blank">Notion</a></li>
            <li><a href="https://github.com/aengkrrrrr" target="_blank">Git</a></li>
          </ul>
        </div>
      </div>
    </header>
  </>
  )  
}

export default Header;