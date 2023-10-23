const buttonMobile = document.getElementById('button-mobile');
const buttonPC = document.getElementById('button-pc');
const PcView = document.getElementById('pc-view');
const MobileView = document.getElementById('mobile-view');
const buttonpayments = document.getElementById('button-payments');
const buttonTrainPlot = document.getElementById('button-kereta-alur');
const buttonPlanePlot = document.getElementById('button-pesawat-alur');
const paymentsPlot = document.getElementById('alur-payments');
const trainPlot = document.getElementById('alur-kereta');
const planePlot = document.getElementById('alur-pesawat');
const buttonTrainTrans = document.getElementById('button-kereta-viewtrans');
const buttonPlaneTrans = document.getElementById('button-pesawat-viewtrans');
const trainTrans = document.getElementById('trans-kereta');
const planeTrans = document.getElementById('trans-pesawat');


function alur (buttonTarget,b,c,viewTarget,e,f){
  buttonTarget.classList.add('underline');
  b.classList.remove('underline');
  c.classList.remove('underline');
  viewTarget.classList.remove('hide');
  e.classList.add('hide');
  f.classList.add('hide');
};

function trans(buttonTarget,b,viewTarget,e){
  buttonTarget.classList.add('underline');
  b.classList.remove('underline');
  viewTarget.classList.remove('hide');
  e.classList.add('hide');
}

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

buttonPC.addEventListener('click',function(){
  MobileView.classList.remove('animate__animated', 'animate__fadeIn');
  PcView.classList.add('animate__animated', 'animate__fadeIn');
  buttonMobile.classList.remove('underline');
  buttonPC.classList.add('underline');
  PcView.classList.remove('hide');
  MobileView.classList.add('hide');
});
buttonMobile.addEventListener('click',function(){
  PcView.classList.remove('animate__animated', 'animate__fadeIn');
  MobileView.classList.add('animate__animated', 'animate__fadeIn');
  buttonPC.classList.remove('underline');
  buttonMobile.classList.add('underline');
  MobileView.classList.remove('hide');
  PcView.classList.add('hide');
});
// alur
buttonpayments.addEventListener('click',function(){
  alur(buttonpayments,buttonPlanePlot,buttonTrainPlot,paymentsPlot,trainPlot,planePlot);
});
buttonPlanePlot.addEventListener('click',function(){
  alur(buttonPlanePlot,buttonpayments,buttonTrainPlot,planePlot,trainPlot,paymentsPlot);
});
buttonTrainPlot.addEventListener('click',function(){
  alur(buttonTrainPlot,buttonpayments,buttonPlanePlot,trainPlot,planePlot,paymentsPlot);
});

// transaksi
buttonTrainTrans.addEventListener('click',function(){
  trans(buttonTrainTrans,buttonPlaneTrans,trainTrans,planeTrans);
})
buttonPlaneTrans.addEventListener('click',function(){
  trans(buttonPlaneTrans,buttonTrainTrans,planeTrans,trainTrans);
})