$(document).ready(function() {
  'use strict';

  var paragraphs = [];
  var children = $('#mightyParagraphHolder').children();
  children.each(function(par) {
    paragraphs.push(children[par]);
  });
  // var next = 0;

  $('button').on('click', function() {
    $('.highlight').removeClass('highlight');

    var current = paragraphs.shift();
    $(current).addClass('highlight');
    paragraphs.push(current);
    // next += 1;
    // if (next === 3) {
    //   next = 0;
    // }
  });
});
