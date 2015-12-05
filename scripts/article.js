var Article = function(props) {
  this.heading =  props.heading;
  this.author = props.author;
  this.authorUrl = props.authorUrl;
  this.publishedOn = props.publishedOn;
  this.artbody = props.artbody;
  this.category = props.category;
};
Article.prototype.toHTML = function() {
  var $data = $('.template').clone();
  $data.removeClass('template');
  $data.addClass('article');
  $data.attr('id', this.heading);
  $data.find('.heading').html("<p>" + this.heading  + "</p>");
  $data.find('.author').html("<p>" + this.author + "<p>");
  $data.find('.url').html("<p>" + this.authorUrl + "</p");
  $data.find('.artbody').html(this.artbody);
  $data.find('.pub').html("<p>" + this.publishedOn + "</p>");
  $data.find('.cat').html("<p>" + this.category + "</p>");
  $data.find('.artbody').append('<button class = "button">' + 'Show More' + '</button>');
  $('main').append($data);
};


// Article.filterPop = function() {
//   for (var i = 0; i < blog.rawData.length; i++){
//     $('#catFilter').append('<option>' + blog.rawData[0].category + '</option>').addClass(blog.rawData[0].category);
//     if () {
//       $('#catFilter').append('<option>' + blog.rawData[i].category + '</option>').addClass(blog.rawData[i].category);
//     };
//     };
//
// };
$(document).ready(blog.render());
// Article.filterPop();


///// #('*').css('border-style: dotted')
