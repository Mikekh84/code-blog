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
  $data.addClass(this.author.replace(/\s/g, ''));
  $data.attr('id', this.heading);
  $data.find('.heading').html('<p>' + this.heading  + '</p>');
  $data.find('.author').html('<p>BY: <a href="'+ this.authorUrl + '">' + this.author + '</a></p>');
  $data.find('.pub').html('<p>' + this.publishedOn + '</p>');
  $data.find('.artbody').html(marked(this.artbody));
  $data.find('.cat').html('<p>' + this.category + '</p>').addClass(this.category);
  $data.find('.artbody').append('<button class = "button">' + 'Show More' + '</button>');
  $('main').append($data);
};



$(document).ready(blog.render());
$(document).ready(blog.truncateArticles());
$(document).ready(blog.toggleAbout());
$(document).ready(blog.filterByAuthor());
$(document).ready(blog.filterByCat());



///// #('*').css('border-style: dotted')
