$(function(){

  $('a.recharge').on('click', show_mobile_input);

});

function show_mobile_input() {
  $('a.mobile-number').slideDown(200, function() {
    $(this).toggleClass('hidden');
    $('.recharge').toggleClass('opaque');
  });
}