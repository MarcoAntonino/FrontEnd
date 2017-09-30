$('document').ready(function (){
  $('#aboutUs').click(function(){
    console.log("cliccato");
    $('section').load('aboutUs.html');
  })
})
