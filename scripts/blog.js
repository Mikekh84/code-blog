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
    $('article p:not(:first-child)').hide();
    $('main').on('click', '.button', function(event) {
      event.preventDefault();
      $(this).parent().find('p').fadeIn();
      $(this).hide();
      console.log('this worked')
    });
  };

blog.truncateArticles();

};
