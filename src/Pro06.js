import React, { useState, useEffect } from 'react';
import proImg from './images/palgongtea_img.png';
import gitImg from './images/git.png';
import circle from './images/circle_palgong.png';

function Pro05(){
  return (
    <>
    <section className="project06 pr_grid">
      <div className="content_wrap df aic">
        <div className="project_ct_">
          <h4 className="h4 mb-5">팔공티</h4>
          <div className="tech_wrap df mb-3">
            <em className="primary_btn">개인</em>
            <em className="primary_btn">HTML</em>
            <em className="primary_btn">CSS</em>
            <em className="primary_btn">JAVACRIPT</em>
            <em className="primary_btn">JQUERY</em>
          </div>
          <p className="pj_p">기존의 팔공티 사이트에서<br/>
            디자인을 새롭게 하여, 사용성을 높인<br/>
            데스크탑, 모바일 버전의 리뉴얼 사이트입니다.
           </p>
          <div className="link_wrap df aic">
            <a href="http://srimm3399.dothome.co.kr/palgongtea/index.html" target='_blank'><span className="material-symbols-outlined">open_in_new</span></a>
            <a href="http://srimm3399.dothome.co.kr/m_palgongtea/index.html" target="_blank"><span class="material-symbols-outlined">phone_iphone</span></a>
            <a href=""><img src={gitImg} alt='깃허브 이미지' className="link_git" /></a>
          </div>
        </div>
        <img src={proImg} alt='팔공티 이미지' className="project_img" />
      </div>
      <img src={circle} alt='팔공티 원모양' className="circle_img_r" />
    
      <strong className="h2">palgongtea</strong>
    </section>
  </>
  )  
}

export default Pro05;