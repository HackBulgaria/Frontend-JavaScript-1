$(document).ready(function() {
  'use strict';

  var inputField = $('#search-input');
  var gallery = $('.container');

  $('#search-button').on('click', loadImage);

  function loadImage() {
    var url = inputField.val();
    var img = $('<img>');
    img.load(function() {
      gallery.append(img);
    });

    img.attr('src', url);
    img.on('click', function() {
      $(this).remove();
    });
  }
});
