import React, { useState, useEffect } from 'react';
import proImg from './images/miraeesset_img.png';
import gitImg from './images/git.png';
import circle from './images/circle_mirae.png';

function Pro03(){
  return (
    <>
   <section className="project03 pr_grid">
      <div className="content_wrap df aic">
      <img src={proImg} alt='미래에셋 이미지' className="project_img" />
        <div className="project_ct_r">
          <h4 className="h4 mb-5">LMS 학습 쇼핑몰 - 관리자</h4>
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
          <p className="pj_p">시멘틱 태그를 활용하고 웹접근성에 준수하여,<br/>
            기획부터 디자인까지 새롭게 리뉴얼한<br/>
            PC반응형 사이트입니다.</p>
          <div className="link_wrap df aic">
            <a href=""><span className="material-symbols-outlined">open_in_new</span></a>
            <a href=""><img src={gitImg} alt='깃허브 이미지' className="link_git" /></a>
          </div>
       </div>
      </div>
      <img src={circle} alt='미래에셋 원모양' className="circle_img_l" />
      <strong className="h2">mirae asset</strong>
    </section>
  </>
  )  
}

export default Pro03;