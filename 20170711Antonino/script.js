var userId = 1;
$('document').ready(function(){

  /*Probably the smartest thing to do, is to have more tha just one script.js file.
  But the exercise asked for just one and there are only two html pages in this exercise, so I've decided to set this control on the page title.*/
  var pageTitle = $('title').text();

  if (pageTitle == "home") {

    var root = 'https://jsonplaceholder.typicode.com';

    /*As you can see, I've made a little change from the exercise we made in the class.
    Now all the posts are loaded as soon the page is loaded*/
    $.ajax({
      url: root + '/posts',
      method: 'GET',
      success: function(data){

          $('section').append('<h1>Our latest posts</h1>');
          data.map(function(post){

            $('section').append('<div id=post'+post.id+'> <h2>'+post.title+'</h2><p>'+post.body+'</p>'+'<button class="btn btn-default" type="button" name="delete" id="delete'+post.id+'">Delete</button></div>');
            $('#delete'+post.id).click(function(){

              if (post.userId == userId) {

                $.ajax({
                  url: root + '/posts/'+post.id,
                  method: 'DELETE',
                  success: function() {
                    console.log("Post number "+post.id+" deleted");
                    $('#post'+post.id).hide('slow', function(){
                      $('#post'+post.id).remove();
                    });
                  }
                })
              }else {
                console.log("You can't delete other user's post!");
                alert("You can't delete other user's post!");
              }
            })
          })
      }
    })

  }else {
    $('#form').submit(function(event) {
      var inputName = $('#name').val();
      var inputEmail = $('#email').val();
      var inputObject = $('#object').val();
      var inputBody = $('#messageBody').val();
      if (inputEmail == "" && inputBody == "") {
        event.preventDefault();
        alert("Non puoi lasciare vuoti i campi");
      }else {
        alert("messaggio inviato correttamente");
      }

    })
  }




})
