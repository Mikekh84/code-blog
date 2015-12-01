var Article = function(props) {
  this.title =  props.title;
  this.author = props.author;
  this.authorUrl = props.authorUrl;
  this.publishedOn = props.publishedOn;
  this.body = props.body;
};

Article.prototype.toHTML = function(props) {
  return '<article>' + this.title +'</article>'
};

Article(blog.rawData);
$('main').append(Article.prototype.toHTML());
