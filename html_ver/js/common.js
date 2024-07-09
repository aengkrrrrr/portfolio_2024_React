AOS.init();

function startBg(){
  document.querySelector('.start_bg').classList.add('hide');
  // document.querySelector('body').style.overflow='hidden';
}

setTimeout(startBg, 2500);

// header 메뉴 이벤트 
const header = document.querySelector('#header');
const menu01 = header.querySelector('.intro_sc');
const menu02 = header.querySelector('.intro_ab');
const menu03 = header.querySelector('.intro_pj');
const menu04 = header.querySelector('.intro_ct');

const intro = document.querySelector('.intro');
const about = document.querySelector('.about');
const project = document.querySelector('.project01');
const contact = document.querySelector('.contact');

menu01.addEventListener('click', (e)=>{
  e.preventDefault()
  const topValue = intro.offsetTop;
  window.scrollTo({
      top: topValue,
      behavior: 'smooth'
  })
})
menu02.addEventListener('click', (e)=>{
  e.preventDefault()
  const topValue = about.offsetTop;
  window.scrollTo({
      top: topValue,
      behavior: 'smooth'
  })
})
menu03.addEventListener('click', (e)=>{
  e.preventDefault()
  const topValue = project.offsetTop;
  window.scrollTo({
      top: topValue,
      behavior: 'smooth'
  })
})
menu04.addEventListener('click', (e)=>{
  e.preventDefault()
  const topValue = contact.offsetTop;
  window.scrollTo({
      top: topValue,
      behavior: 'smooth'
  })
})

////////////// header 메뉴 이벤트 


// uptotop 이벤트
const uptoTop = document.querySelector('.option_wrap .upto_top');

uptoTop.addEventListener('click',()=> {
  window.scrollTo(0,0);
})

///////// uptotop 이벤트

//board modal 이벤트
const board_btn = document.querySelector('.option .board');
const close_btn = document.querySelector('.close_btn');
const board = document.querySelector('.board_wrap');

board_btn.addEventListener('click', ()=>{
  board.classList.add('show');
})
close_btn.addEventListener('click', ()=>{
  board.classList.remove('show');
})
////////board modal 이벤트

//para 애니메이션 이벤트
let bodyWidth = document.querySelector('body').clientWidth;
let paraParent = document.querySelector('.para_wrap');
let paraParent02 = document.querySelector('.para_wrap02');
let paraParent03 = document.querySelector('.para_wrap03');
let paragraph = paraParent.querySelector('p');

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

// 페이지 로드 후 애니메이션 시작
window.onload = animatePara;

///////////para 애니메이션 이벤트