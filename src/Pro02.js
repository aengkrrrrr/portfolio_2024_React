import React, { useState, useEffect } from 'react';
import proImg from './images/dlkang_img.jpg';
import gitImg from './images/git.png';
import circle from './images/circle_kang.png';

function Pro02(){
  return (
    <>
    <section className="project02 pr_grid">
      <div className="content_wrap df aic">
        <div className="project_ct_">
          <h4 className="h4 mb-5">LMS 학습 쇼핑몰 - 사용자</h4>
          <div className="tech_wrap df mb-3">
            <em className="primary_btn">팀</em>
            <em className="primary_btn">HTML</em>
            <em className="primary_btn">CSS</em>
            <em className="primary_btn">JAVACRIPT</em>
            <em className="primary_btn">JQUERY</em>
          </div>
          <div className="tech_wrap df">
            <em className="primary_btn">PHP</em>
            <em className="primary_btn">MYSQL</em>
          </div>
          <p className="pj_p">빠르고 쉽게 배울 수 있다는 컨셉의<br/>
            딥러닝캥거루 LMS 학습 쇼핑몰 사이트의<br/>
            사용자 페이지입니다.</p>
          <div className="link_wrap df aic">
            <a href="http://srimm3399.dothome.co.kr/clean_kangaroo/" target='_blank'><span className="material-symbols-outlined">open_in_new</span></a>
            <a href="https://github.com/aengkrrrrr/clean_kangaroo.git" target='_blank'><img src={gitImg} alt='깃허브 이미지' className="link_git" /></a>
          </div>
        </div>
        <img src={proImg} alt='딥러닝캥거루 사용자' className="project_img" />
      </div>
      <img src={circle} alt='딥러닝캥거루 원모양' className="circle_img_r" />
      <strong className="h2">Deep learning kangaroo</strong>
    </section>
  </>
  )  
}

export default Pro02;