$(document).ready(function(){
  $('.slider').slick({
    infinite: true,
    sarrows: true,
    dots: true
  });
});
$('.slider__arrow').click(function () {
  $('.info, .slider__arrow').hide();
  $('.slider__info-title').css('display', 'flex');
  $('.slider__info').show();
});
$('.slider__info').click(function () {
  $('.info, .slider__arrow').show();
  $('.slider__info-title').hide();
  $('.slider__info').hide();
});