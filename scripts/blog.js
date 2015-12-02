var blog = {};

blog.render = function(){
  blog.rawData.sort(function(a, b) {
    a = new Date(a.publishedOn);
    b = new Date(b.publishedOn);
    return a>b ? -1 : a<b ? 1 : 0;
  });
  for (var i = 0; i < blog.rawData.length; i++){
    var art = new Article(blog.rawData[i]);
    art.toHTML();
  }
};
