var preveiw = {}

preveiw.getFormInfo = function(){

  $('#formInfo').children().on('blur' ,function(){
    var formHeading = $('#formHeading').val();
    var formAuthor = $('#formAuthor').val();
    var formAuthorUrl = $('#formAuthorUrl').val();
    var formCategory = $('#formCategory').val();
    var formArtBody = $('#formArtBody').val();

    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();

    var today = year + "-" + month + "-" + day;
    // console.log(formHeading + ' ' + formAuthor + ' ' + formAuthorUrl + ' ' + formCategory+ ' ' + formArtBody );

    $('#preview').find('.heading').html("<p>" + formHeading  + "</p>");
    $('#preview').find('.author').html("<p>" + formAuthor + "<p>");
    $('#preview').find('.url').html("<p>" + formAuthorUrl + "</p");
    $('#preview').find('.artbody').html(formArtBody);
    $('#preview').find('.pub').html("<p>" + today + "</p>");
    $('#preview').find('.cat').html("<p>" + formCategory + "</p>");
    $('#submitButton').on('click', function(event){
      event.preventDefault();
      var newPost = {
      heading: formHeading,
      category: formCategory,
      author: formAuthor,
      authorUrl: formAuthorUrl,
      publishedOn: today,
      artbody: formArtBody
      }

      var jsonPost = JSON.stringify(newPost);
      console.log(jsonPost);
      $('#stringified').html(jsonPost);

    })
  })



}
// $(function() {
  preveiw.getFormInfo();
// })
