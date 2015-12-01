var Article = function(props) {
  this.title =  props.title;
  this.author = props.author;
  this.authorUrl = props.authorUrl;
  this.publishedOn = props.publishedOn;
  this.body = props.body;
};

Article.prototype.toHTML = function() {
  return '<article>' + this.title +'</article>'
};

$('main').append(blog.rawData);
