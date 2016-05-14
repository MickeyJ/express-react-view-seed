import $ from 'jquery'

$(function() {

  const url = (window.location.href).split("/").pop();
  $('#nav').find('a[href="/'+url+'"]').addClass('active-link');

});