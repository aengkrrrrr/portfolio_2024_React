import React, { useState, useEffect } from 'react';
import proImg from './images/lottewelfood_img.png';
import gitImg from './images/git.png';
import circle from './images/circle_lotte.png';

function Pro05(){
  return (
    <>
    <section className="project05 pr_grid">
      <div className="content_wrap df aic">
      <img src={proImg} alt='롯데웰푸드 이미지' className="project_img" />
        <div className="project_ct_r">
          <h4 className="h4 mb-5">롯데웰푸드</h4>
          <div className="tech_wrap df mb-3">
            <em className="primary_btn">개인</em>
            <em className="primary_btn">HTML</em>
            <em className="primary_btn">CSS</em>
            <em className="primary_btn">JAVACRIPT</em>
            <em className="primary_btn">JQUERY</em>
          </div>
          <p className="pj_p">시멘틱 태그를 활용하고 웹접근성에 준수하여,<br/>
          클론코딩한 PC반응형 사이트입니다.</p>
          <div className="link_wrap df aic">
            <a href="http://srimm3399.dothome.co.kr/lottewelfood/index.html" target='_blank'><span class="material-symbols-outlined">open_in_new</span></a>
            <a href="" target='_blank'><img src={gitImg} alt='깃허브 이미지' className="link_git" /></a>
          </div>
       </div>
      </div>
      <img src={circle} alt='롯데웰푸드 원모양' className="circle_img_l" />
      <strong className="h2">lotte wellfood</strong>
    </section>
  </>
  )  
}

export default Pro05;