var preveiw = {}

preveiw.getFormInfo = function(){
  $('#formInfo').children().on('blur' ,function(){
    var formHeading = $('#formHeading').val();
    var formAuthor = $('#formAuthor').val();
    var formAuthorUrl = $('#formAuthorUrl').val();
    var formCategory = $('#formCategory').val();
    var formArtBody = $('#formArtBody').val();
    console.log(formHeading + ' ' + formAuthor + ' ' + formAuthorUrl + ' ' + formCategory+ ' ' + formArtBody );
  });
  // e.preventDefult();

}
// $(function() {
  preveiw.getFormInfo();
// })
