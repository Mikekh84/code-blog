var Article = function(props) {
  this.heading =  props.heading;
  this.author = props.author;
  this.authorUrl = props.authorUrl;
  this.publishedOn = props.publishedOn;
  this.artbody = props.artbody;
  this.category = props.cat;
};

Article.prototype.toHTML = function() {
  var $data = $('.template').clone();
  $data.removeClass('template');
  $data.attr('id', this.heading);
  $data.find('.heading').html("<p>" + this.heading  + "</p>");
  $data.find('.author').html("<p>" + this.author + "<p>");
  $data.find('.url').html("<p>" + this.authorUrl + "</p");
  $data.find('.artbody').html(this.artbody);
  $data.find('.pub').html("<p>" + this.publishedOn + "</p>");
  $data.find('.cat').html("<p>" + this.category + "</p>");

  $('main').append($data);
};

$(document).ready(blog.render());
