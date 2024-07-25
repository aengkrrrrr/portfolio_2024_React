import React, { useState, useEffect } from 'react';
// import aboutVideo from './sample.webm';

function About(){
  return (
    <>
    <section className="about second_font">
      <h2>I'm a</h2>
      <div className="circle_wrap df fdc aic">
        <em className="ti" data-aos="fade-up">circle01</em>
        <em className="ti" data-aos="fade-up">circle02</em>
        <em className="ti" data-aos="fade-up">circle03</em>
      </div>
      <video muted autoPlay loop>
        <source src="/sample.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
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
  )  
}

export default About;