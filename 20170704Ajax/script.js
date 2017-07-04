$('document').ready(function(){

  var root = 'https://jsonplaceholder.typicode.com';
  $('#home').click(function() {
    $.ajax({
      /*A questa funzione gli passiamo un oggetto di tipo Jsono di tipo chaive valore*/

      url: root + '/posts', //passami il post che ha come id=1
      method: 'GET', //il get non lo vedi nella barra dell'indirizzo perchè è una chiamata asincrona
      success: function(data){

        data.map(function(post){ //map è una sorta di foreach
          //console.log(post.title);
          $('section').append('<h2>'+post.title+'</h2><p>'+post.body+'</p>');
        })
      }
    })

  })

  $('#about').click(function(){
    $.ajax({
      url: 'about.html',
      success: function(data){
        $('section').html(data);
      }
    })
  })
/*cross origin request: il browser applicadelle regole che dicono qual'è la sorgente che può chiamare per prendersi dei dati.

*/

// $.('section').load('about.html') metodo alternativo


})
