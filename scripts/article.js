var Article = function(props) {
  this.heading =  props.heading;
  this.author = props.author;
  this.authorUrl = props.authorUrl;
  this.publishedOn = props.publishedOn;
  this.artbody = props.artbody;
  this.cat = props.cat;
};

Article.prototype.toHTML = function() {
  var $data = $('.template').clone();
  $data.removeClass('.template');
  $data.attr('id', this.heading);
  $data.find('.heading').text(this.heading);
  $data.find('.author').text(this.author);
  $data.find('.url').text(this.authorUrl);
  $data.find('.artbody').text(this.artbody);
  $data.find('.pub').text(this.publishedOn);
  $data.find('.cat').text(this.cat);

  $('main').append($data);
};
