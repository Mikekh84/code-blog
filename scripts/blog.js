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

blog.truncateArticles();

};
