var blog = {};

blog.render = function(){

  //Sort Method from StackOverflow
  blog.rawData.sort(function(a, b) {
    a = new Date(a.publishedOn);
    b = new Date(b.publishedOn);
    return a>b ? -1 : a<b ? 1 : 0;
  });

//loads the articles
  for (var i = 0; i < blog.rawData.length; i++){
    var art = new Article(blog.rawData[i]);
    art.toHTML();
  };

  blog.truncateArticles = function() {
    //this = button el
    $('article p:not(:first-child)').hide();
    $('main').on('click', '.button', function(event) {
      event.preventDefault();
      // Trying a toggle Feature -- Seems to work -- Now only targets
      //not first paragram
      $(this).parent().find('p:not(:first-child)').toggle();
    });
  };

};






blog.filterPop = function() {
  //Sort Method from StackOverflow
  blog.rawData.sort(function(a, b) {
    a = a.category;
    b = b.category;
    return a<b ? -1 : a>b ? 1 : 0;
  });

  //Add option to Category dropdown
  for (var i = 0; i < blog.rawData.length; i++) {
  var $optionCat = blog.rawData[i].category;
  if (blog.rawData[i].category !== blog.rawData[i+1].category) {
    $('#catFilter').append('<option class="'+ $optionCat +'">' + $optionCat + '</option>');
    // console.log(blog.rawData[0].category);
  };
};

blog.filterPopAuthor = function () {








}
//Sort Method from StackOverflow
blog.rawData.sort(function(a, b) {
  a = a.author;
  b = b.author;
  return a<b ? -1 : a>b ? 1 : 0;
});

  //ad option to author dropdown.
  for (var i = 0; i < blog.rawData.length; i++) {
    $('#authFilter').append('<option>' + blog.rawData[i].author + '</option>')
  };
};
