import React, { useState, useEffect } from 'react';
import proImg from './images/nars_img.png';
import gitImg from './images/git.png';
import circle from './images/circle_nars.png';

function Pro04(){
  return (
    <>
    <section className="project04 pr_grid">
      <div className="content_wrap df aic">
        <div className="project_ct_">
          <h4 className="h4 mb-5">나스 코스메틱</h4>
          <div className="tech_wrap df mb-3">
            <em className="primary_btn">개인</em>
            <em className="primary_btn">HTML</em>
            <em className="primary_btn">CSS</em>
            <em className="primary_btn">JAVACRIPT</em>
          </div>
          <p className="pj_p">
            기획부터 디자인까지 새롭게 리뉴얼하고,<br/>
            바닐라 자바스크립트를 최대한 활용하여 제작한<br/>
            리뉴얼 사이트입니다.</p>
          <div className="link_wrap df aic">
            <a href="http://srimm3399.dothome.co.kr/nars/index.html" target='_blank'><span className="material-symbols-outlined">open_in_new</span></a>
            <a href="https://github.com/aengkrrrrr/NARS.git" target='_blank'><img src={gitImg} alt='깃허브 이미지' className="link_git" /></a>
          </div>
        </div>
        <img src={proImg} alt='미래에셋 이미지' className="project_img" />
      </div>
      <img src={circle} alt='나스 원모양' className="circle_img_r" />
    
      <strong className="h2">nars cosmetics</strong>
    </section>
  </>
  )  
}

export default Pro04;