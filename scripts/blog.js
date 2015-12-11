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
    //this = button el
    $('article p:not(:first-child)').hide();
    $('main').on('click', '.button', function(event) {
      event.preventDefault();
      // Shows more paragrahs. Makes a New Show Less Button. Detaches Show More Button
      $(this).parent().find('p:not(:first-child)').show();
      $(this).parent().append('<button class ="less">' + 'Show Less' + "</button>");
      $(this).detach();
    });

    $('main').on('click', '.less', function(event) {
      event.preventDefault();
      // Hides All But first paragraph.Makes a Show more Button. Detaches show less button. 
      $(this).parent().find('p:not(:first-child)').hide();
      $(this).parent().append('<button class ="button">' + 'Show More' + "</button>");
      $(this).detach();
    });


  };

};

    blog.filterPop = function(){
      //Sort Method from StackOverflow
      blog.rawData.sort(function(a, b) {
        a = a.category;
        b = b.category;
        return a<b ? -1 : a>b ? 1 : 0;
      });

      //Add option to Category dropdown
        $('#catFilter').append('<option class="'+ blog.rawData[0].category +'">' + blog.rawData[0].category + '</option>');
        for (var i = 1; i < blog.rawData.length-1; i++) {
          var $optionCat = blog.rawData[i].category;
          if (blog.rawData[i].category !== blog.rawData[i-1].category) {
            $('#catFilter').append('<option class="'+ $optionCat +'">' + $optionCat + '</option>');
            // console.log(blog.rawData[0].category);
          };
        };
};
//
blog.filterPopAuthor = function() {
    blog.rawData.sort(function(a, b) {
      a = a.author;
      b = b.author;
      return a<b ? -1 : a>b ? 1 : 0;
    });
  $('#authFilter').append('<option class="'+ blog.rawData[0].author +'">' + blog.rawData[0].author + '</option>')
  for (var i = 1; i < blog.rawData.length; i++){
    var $optionAuth = blog.rawData[i].author;
      if($optionAuth !== blog.rawData[i-1].author) {
    $('#authFilter').append('<option class="'+ blog.rawData[i].author +'">' + blog.rawData[i].author + '</option>');
    // console.log($optionAuth);
    };
  };
};
