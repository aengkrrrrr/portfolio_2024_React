import React, { useState, useEffect } from 'react';

function Contact(){
  return (
    <>
    <section className="contact">
      <h1>Do You Have Any Questions ?</h1>
      <p>열정 가득한 신입을 찾고 계신가요? 저에게 언제든 연락주세요!<br/>연락을 보내주신다면 1~2일내로 답장을 드리겠습니다.</p>
      <ul className="contact_way df aic">
        <li className="df fdc">
          <em>Address</em>
          <span>경기도 부천시</span>
        </li>
        <li className="df fdc">
          <em>Cell Phone</em>
          <span>+82-10-6613-5660</span>
        </li>
        <li className="df fdc">
          <em>Email</em>
          <span>srimm3399@naver.com</span>
        </li>
      </ul>
    </section>
  </>
  )  
}

export default Contact;