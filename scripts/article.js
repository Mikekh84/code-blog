var Article = function(props) {
  this.heading =  props.heading;
  this.author = props.author;
  this.authorUrl = props.authorUrl;
  this.publishedOn = props.publishedOn;
  this.artbody = props.artbody;
  this.category = props.category;
};
Article.prototype.toHTML = function() {
  // var $data = $('.artTemplate').clone();
  // $data.removeClass('template');
  // $data.addClass('article');
  // $data.attr('id', this.heading);
  // $data.find('.heading').html("<p>" + this.heading  + "</p>");
  // $data.find('.author').html("<p>" + this.author + "<p>");
  // $data.find('.url').html("<p>" + this.authorUrl + "</p");
  // $data.find('.artbody').html(this.artbody);
  // $data.find('.pub').html("<p>" + this.publishedOn + "</p>");
  // $data.find('.cat').html("<p>" + this.category + "</p>");
  // $data.find('.artbody').append('<button class = "button">' + 'Show More' + '</button>');

  var source = $('#post-template').html();
  var template = Handlebars.compile(source);
  var html = template(this)
  $('main').append(html);
};



$(document).ready(blog.render());
$(document).ready(blog.truncateArticles());
$(document).ready(blog.filterPop());
$(document).ready(blog.filterPopAuthor());



///// #('*').css('border-style: dotted')
