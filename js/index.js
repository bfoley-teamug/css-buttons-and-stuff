var $header = $('header'),
    $headerHeight = $header.height(),
    $title = $('.title');

var navScroll = {

  init:function(){
    $(window).on('scroll',function(){
      navScroll.navDrop();
    })
  },

  navDrop:function(){
    var $scrollTop = $(window).scrollTop();

    if($scrollTop > $headerHeight){
      $header.addClass('scrolled');
      $title.css('padding-top','70px');
    }
    else if($scrollTop == 0) {
      $header.removeClass('scrolled');
      $title.css('padding-top','0');
    }

  }
}

$(document).ready(function(){
  navScroll.init();
})

//button
const button = document.querySelector('.button');

button.addEventListener('mousemove', (e) => {
  const sensitivity = 30;
  const { offsetX, offsetY } = e;
  const { offsetHeight, offsetWidth} = e.target;

  const y = -((offsetX / offsetWidth) - 0.5) * sensitivity;
  const x = ((offsetY / offsetHeight) - 0.5) * sensitivity;

  button.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(0) scale(1.2)`;
});

button.addEventListener('mouseout', () => {
  button.style.transform = "scale(1.0) rotateX(0) rotateY(0)";
});
