import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import chuImg from './images/92C2FD05-1600-4E46-8091-1959ED19CE06-removebg-preview.png';
import htmlImg from './images/free-icon-html-5-5968267.png';
import cssImg from './images/free-icon-css-919826.png';
import jsImg from './images/free-icon-js-5968292.png';
import reactImg from './images/png-clipart-react-javascript-angularjs-ionic-github-text-logo-thumbnail-removebg-preview.png';
function About() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 600,
    });

    // Animation Script
    let bodyWidth = document.querySelector('body').clientWidth;
    let paraParent = document.querySelector('.para_wrap');
    let paraParent02 = document.querySelector('.para_wrap02');
    let paraParent03 = document.querySelector('.para_wrap03');
    let paragraph = paraParent.querySelectorAll('p');

    paraParent.style.width = `${bodyWidth * paragraph.length}px`;

    let currentLeft = 0;
    const speed = 2; // 이동 속도 (조정 가능)

    function animatePara() {
      currentLeft -= speed;
      if (Math.abs(currentLeft) >= paraParent.clientWidth / paragraph.length) {
        currentLeft = 0; // 원래 위치로 돌아가기
      }
      paraParent.style.left = `${currentLeft}px`;
      paraParent02.style.right = `${currentLeft}px`;
      paraParent03.style.left = `${currentLeft}px`;
      requestAnimationFrame(animatePara);
    }

    animatePara();

    // Cleanup function
    return () => {
      cancelAnimationFrame(animatePara);
    };
  }, []);

  return (
    <>
      <section className="about second_font">
        <h2>I'm a</h2>
        <div className="circle_wrap df fdc aic">
          <em className="ti" data-aos="fade-up">circle01</em>
          <em className="ti" data-aos="fade-up">circle02</em>
          <em className="ti" data-aos="fade-up">circle03</em>
        </div>
        {/* <video muted autoPlay loop>
          <source src="/chu_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
        <div className='tech_wrap'>
        <img src={htmlImg} alt='html이미지' className="htmlImg" />
          
          <div className='cssImg'></div>
          <div className='jsImg'></div>
          <div className='reactImg'></div>
        </div>
        <img src={chuImg} alt='미모티콘' className="about_img" />
        <div className="para_wrap">
          <p>Positive Adventurous Cooperative Developer Positive Adventurous Cooperative Developer Positive Adventurous Cooperative Developer Positive Adventurous Cooperative Developer</p>
          <p>Positive Adventurous Cooperative Developer Positive Adventurous Cooperative Developer Positive Adventurous Cooperative Developer Positive Adventurous Cooperative Developer</p>
          <p>Positive Adventurous Cooperative Developer Positive Adventurous Cooperative Developer Positive Adventurous Cooperative Developer Positive Adventurous Cooperative Publisher</p>
        </div>
        <div className="para_wrap02">
          <p className="h3">Positive Adventurous Cooperative Developer Positive Adventurous Cooperative Developer Positive Adventurous Cooperative Developer Positive Adventurous Cooperative Developer</p>
          <p className="h3">Positive Adventurous Cooperative Developer Positive Adventurous Cooperative Developer Positive Adventurous Cooperative Developer Positive Adventurous Cooperative Developer</p>
          <p className="h3">Positive Adventurous Cooperative Developer Positive Adventurous Cooperative Developer Positive Adventurous Cooperative Developer Positive Adventurous Cooperative Publisher</p>
        </div>
        <div className="para_wrap03">
          <p className="h4">Positive Adventurous Cooperative Developer Positive Adventurous Cooperative Developer Positive Adventurous Cooperative Developer Positive Adventurous Cooperative Developer</p>
          <p className="h4">Positive Adventurous Cooperative Developer Positive Adventurous Cooperative Developer Positive Adventurous Cooperative Developer Positive Adventurous Cooperative Developer</p>
          <p className="h4">Positive Adventurous Cooperative Developer Positive Adventurous Cooperative Developer Positive Adventurous Cooperative Developer Positive Adventurous Cooperative Publisher</p>
        </div>
        <div className="goto_pj">
          <p>Go to project !</p>
          <span className="material-symbols-outlined">south</span>
        </div>
      </section>
    </>
  );
}

export default About;
