var stats = {};

var getData = function() {
  $.get('scripts/blogArticles.js');
  console.log('got something');
};

getData();
