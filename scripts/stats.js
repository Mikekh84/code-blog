var stats = {};
var statData = '';

stats.getData = function () {
  $.getJSON('scripts/hackerIpsum.json', function(data) {
    statData = data;
    // console.log(data);
  }).done(numArticles)
    .done(numAuthors);
};


function numArticles() {
  $('#stats').html('<p> Number of Articles:' + statData.length + '</p>');
};

function numAuthors() {
    console.log('this worked');
  };




stats.getData();
