var preveiw = {}

preveiw.getFormInfo = function(){
  $('#formInfo').children().on('blur' ,function(){
    var formHeading = $('#formHeading').val();
    var formAuthor = $('#formAuthor').val();
    var formAuthorUrl = $('#formAuthorUrl').val();
    var formCategory = $('#formCategory').val();
    var formArtBody = $('#formArtBody').val();
    var today = new Date();
    console.log(formHeading + ' ' + formAuthor + ' ' + formAuthorUrl + ' ' + formCategory+ ' ' + formArtBody );

    //var $data = $('.template').clone();
    // $data.removeClass('template');
    // ('#preview').find().attr('id', this.heading);
    $('#preview').find('.heading').html("<p>" + formHeading  + "</p>");
    $('#preview').find('.author').html("<p>" + formAuthor + "<p>");
    $('#preview').find('.url').html("<p>" + formAuthorUrl + "</p");
    $('#preview').find('.artbody').html(formArtBody);
    $('#preview').find('.pub').html("<p>" + today + "</p>");
    $('#preview').find('.cat').html("<p>" + formCategory + "</p>");

    //$('#preview').append($data);
  });
  // e.preventDefult();

}
// $(function() {
  preveiw.getFormInfo();
// })
