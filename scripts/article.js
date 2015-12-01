var Article = function(props) {
  this.heading =  props.heading;
  this.author = props.author;
  this.authorUrl = props.authorUrl;
  this.publishedOn = props.publishedOn;
  this.body = props.body;
  this.cat = props.cat;
};

Article.prototype.toHTML = function() {
  var $data = $('.template').clone();
  $data.removeClass('.template');
  $data.attr('id', this.heading);
  $data.find('.heading').text(this.heading);

  $('main').append($data);
};
