import React from 'react';
import imgLogo from './logo.png';

function Header({ onScroll }) {
  const handleScroll = (sectionId) => {
    if (onScroll) {
      onScroll(sectionId);
    }
  };

  return (
    <header id="header">
      <div className="header_ct df aic">
        <h1 className="logo">
          <img src={imgLogo} alt="logo" />
        </h1>
        <nav>
          <ul className="gnb_wrap df">
            <li>
              <a href="#intro" onClick={(e) => { e.preventDefault(); handleScroll('intro'); }}>Home</a>
            </li>
            <li>
              <a href="#about" onClick={(e) => { e.preventDefault(); handleScroll('about'); }}>About</a>
            </li>
            <li>
              <a href="#project" onClick={(e) => { e.preventDefault(); handleScroll('project'); }}>Project</a>
            </li>
            <li>
              <a href="#contact" onClick={(e) => { e.preventDefault(); handleScroll('contact'); }}>Contact</a>
            </li>
          </ul>
        </nav>
        <div className="util_wrap">
          <ul className="util df">
            <li>
              <a href="https://petite-nigella-ec4.notion.site/8bf7923a4aad44e788fb46677f057cf9?pvs=4" target="_blank" rel="noopener noreferrer">Notion</a>
            </li>
            <li>
              <a href="https://github.com/aengkrrrrr" target="_blank" rel="noopener noreferrer">Git</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
