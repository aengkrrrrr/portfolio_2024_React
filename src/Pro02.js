import React, { useState, useEffect } from 'react';
import proImg from './images/dlkang_img.jpg';
import gitImg from './images/git.png';
import circle from './images/circle_kang.png';

function Pro02(){
  return (
    <>
    <section class="project02 pr_grid">
      <div class="content_wrap df aic">
        <div class="project_ct_">
          <h4 class="h4 mb-5">LMS 학습 쇼핑몰 - 사용자</h4>
          <div class="tech_wrap df mb-3">
            <em class="primary_btn">팀</em>
            <em class="primary_btn">HTML</em>
            <em class="primary_btn">CSS</em>
            <em class="primary_btn">JAVACRIPT</em>
            <em class="primary_btn">JQUERY</em>
          </div>
          <div class="tech_wrap df">
            <em class="primary_btn">PHP</em>
            <em class="primary_btn">MYSQL</em>
          </div>
          <p class="pj_p">시멘틱 태그를 활용하고 웹접근성에 준수하여,<br/>
            기획부터 디자인까지 새롭게 리뉴얼한<br/>
            PC반응형 사이트입니다.</p>
          <div class="link_wrap df aic">
            <a href=""><span class="material-symbols-outlined">open_in_new</span></a>
            <a href=""><img src={gitImg} alt='깃허브 이미지' className="link_git" /></a>
          </div>
        </div>
        <img src={proImg} alt='딥러닝캥거루 사용자' className="project_img" />
      </div>
      <img src={circle} alt='딥러닝캥거루 원모양' className="circle_img_r" />
      <strong class="h2">Deep learning kangaroo</strong>
    </section>
  </>
  )  
}

export default Pro02;