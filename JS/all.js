$(document).ready(function(){

  // top返回頂欄效果
  $('.top').click(function(event){
    event.preventDefault();
    $('html,body').animate({
      scrollTop: 0
    }, 800);
  });

  // header下拉式選單效果
  $('.menu > li').hover(function(event){
    $(this).find('.dropdown-open').slideToggle();
  });

  // swiper輪播效果
  const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 500,
    effect: 'flip',
    autoplay:{
      delay: 4000,
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // lightbox2燈箱效果
  lightbox.option({
    resizeDuration: 500,
    wrapAround: true,
    showImageNumberLabel: false,
    fadeDuration: 500,
    imageFadeDuration: 1500,
  })
});