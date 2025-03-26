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
          <h4 className="h4 mb-5">동물의 숲 - 심리테스트</h4>
          <div className="tech_wrap df mb-3">
            <em className="primary_btn">개인</em>
            <em className="primary_btn">HTML</em>
            <em className="primary_btn">CSS</em>
            <em className="primary_btn">JAVACRIPT</em>
          </div>
          <p className="pj_p">최근 유행한 MBTI 기반의<br/>
            심리테스트들을 참고하여 제작한<br/>
            모바일용 동물의 숲 심리 테스트입니다. 
           </p>
          <div className="link_wrap df aic">
            <a href="http://srimm3399.dothome.co.kr/animal_crossing/index.html" target="_blank"><span className="material-symbols-outlined">phone_iphone</span></a>
            <a href="https://github.com/aengkrrrrr/Animal_Crossing_Test"><img src={gitImg} alt='깃허브 이미지' className="link_git" /></a>
          </div>
        </div>
        <img src={proImg} alt='동숲 이미지' className="project_img" />
      </div>
      <img src={circle} alt='동숲 원모양' className="circle_img_r" />
    
      <strong className="h2">Animal Crossing</strong>
    </section>
  </>
  )  
}

export default Pro05;