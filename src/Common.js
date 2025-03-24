// import AOS from 'aos';
// import 'aos/dist/aos.css';

// AOS.init();

// function startBg(){
//   document.querySelector('.start_bg').classList.add('hide');
//   // document.querySelector('body').style.overflow='hidden';
// }

// setTimeout(startBg, 2500);

// // header 메뉴 이벤트 
// const header = document.querySelector('#header');

// const menuItems = [
//   { selector: '.intro_sc', target: '.intro' },
//   { selector: '.intro_ab', target: '.about' },
//   { selector: '.intro_pj', target: '.project01' },
//   { selector: '.intro_ct', target: '.contact' }
// ];

// menuItems.forEach(item => {
//   const menu = header.querySelector(item.selector);
//   const section = document.querySelector(item.target);
  
//   menu.addEventListener('click', (e) => {
//     e.preventDefault();
//     window.scrollTo({
//       top: section.offsetTop,
//       behavior: 'smooth'
//     });
//   });
// });

// ////////////// header 메뉴 이벤트 


// // uptotop 이벤트
// const uptoTop = document.querySelector('.option_wrap .upto_top');

// uptoTop.addEventListener('click',()=> {
//   window.scrollTo(0,0);
// })

// ///////// uptotop 이벤트

// //board modal 이벤트
// const board_btn = document.querySelector('.option .board');
// const close_btn = document.querySelector('.close_btn');
// const board = document.querySelector('.board_wrap');

// board_btn.addEventListener('click', ()=>{
//   board.classList.add('show');
// })
// close_btn.addEventListener('click', ()=>{
//   board.classList.remove('show');
// })
// ////////board modal 이벤트

// //para 애니메이션 이벤트
// let bodyWidth = document.querySelector('body').clientWidth;
// let paraParent = document.querySelector('.para_wrap');
// let paraParent02 = document.querySelector('.para_wrap02');
// let paraParent03 = document.querySelector('.para_wrap03');
// let paragraph = paraParent.querySelector('p');

// paraParent.style.width = `${bodyWidth * paragraph.length}px`;

// let currentLeft = 0;
// const speed = 2; // 이동 속도 (조정 가능)

// function animatePara() {
//   currentLeft -= speed;
//   if (Math.abs(currentLeft) >= paraParent.clientWidth / paragraph.length) {
//     currentLeft = 0; // 원래 위치로 돌아가기
//   }
//   paraParent.style.left = `${currentLeft}px`;
//   paraParent02.style.right = `${currentLeft}px`;
//   paraParent03.style.left = `${currentLeft}px`;
//   requestAnimationFrame(animatePara);
// }

// // 페이지 로드 후 애니메이션 시작
// window.onload = animatePara;

// ///////////para 애니메이션 이벤트


import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Common() {
  useEffect(() => {
    AOS.init();

    // startBg 함수
    const startBg = () => {
      const startBgElement = document.querySelector('.start_bg');
      if (startBgElement) {
        startBgElement.classList.add('hide');
      }
    };
    setTimeout(startBg, 2500);

    // header 메뉴 이벤트
    const header = document.querySelector('#header');
    if (header) {
      const menuItems = [
        { selector: '.intro_sc', target: '.intro' },
        { selector: '.intro_ab', target: '.about' },
        { selector: '.intro_pj', target: '.project01' },
        { selector: '.intro_ct', target: '.contact' }
      ];

      menuItems.forEach(item => {
        const menu = header.querySelector(item.selector);
        const section = document.querySelector(item.target);

        if (menu && section) {
          menu.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
              top: section.offsetTop,
              behavior: 'smooth'
            });
          });
        }
      });
    }

    // uptotop 이벤트
    const uptoTop = document.querySelector('.option_wrap .upto_top');
    if (uptoTop) {
      uptoTop.addEventListener('click', () => {
        window.scrollTo(0, 0);
      });
    }

    // board modal 이벤트
    const board_btn = document.querySelector('.option .board');
    const close_btn = document.querySelector('.close_btn');
    const board = document.querySelector('.board_wrap');

    if (board_btn && close_btn && board) {
      board_btn.addEventListener('click', () => {
        board.classList.add('show');
      });
      close_btn.addEventListener('click', () => {
        board.classList.remove('show');
      });
    }

    // para 애니메이션 이벤트
    const bodyWidth = document.querySelector('body').clientWidth;
    const paraParent = document.querySelector('.para_wrap');
    const paraParent02 = document.querySelector('.para_wrap02');
    const paraParent03 = document.querySelector('.para_wrap03');
    const paragraph = paraParent ? paraParent.querySelector('p') : null;

    if (paraParent && paraParent02 && paraParent03 && paragraph) {
      paraParent.style.width = `${bodyWidth * paragraph.length}px`;

      let currentLeft = 0;
      const speed = 2;

      function animatePara() {
        currentLeft -= speed;
        if (Math.abs(currentLeft) >= paraParent.clientWidth / paragraph.length) {
          currentLeft = 0;
        }
        paraParent.style.left = `${currentLeft}px`;
        paraParent02.style.right = `${currentLeft}px`;
        paraParent03.style.left = `${currentLeft}px`;
        requestAnimationFrame(animatePara);
      }

      window.onload = animatePara;
    }
  }, []);

  return null; // React 컴포넌트이므로 JSX를 반환하지 않음
}

export default Common;
