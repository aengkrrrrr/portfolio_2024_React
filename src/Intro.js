import React, { useState, useEffect } from 'react';

function Intro(){
  return (
    <>
      <section className="intro">
      <h2 className="hidden">introduce</h2>
      <div className="container">
        <div className="intro_p df jcc">
          <p className="h4">발전해나가는</p>
          <p className="h4">개발자 추송림</p>
        </div>
        <h1 className="h1 second_font">
          BORN<br/>DEVELOPER
        </h1>
      </div>
    </section>
  </>
  )  
}

export default Intro;