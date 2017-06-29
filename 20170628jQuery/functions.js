/*
body dove avveràà la funzione
click e l'evento che scatenerà
*/
// $('p').click(function(){
//
//   $(this).css('color',red);
//   console.log("mi hai cliccato");
//
// })


/*
Quando il mio html è statao caricato tutto, allora, eseguimi questa funzione. Così siamo sicuri che il js venga eseguito solo quando tutti i tag html sono stati caricati.*/

// $('document').ready(function () {
  // $('.change-color').click(function () {
  //   $(this).css('color', 'red');
  // })



// function toggle() {
// //controlliamo se il nostro paragrafo ha oppure no una determianta classe css, se non ce l'ha gli applico una classe, se ce l'ha gliela
//
//   var hasClass = $('p').hasClass('change-color');
//   console.log(hasClass);
//   return hasClass;
//   }

  // $('button').click(function() {
    // if (toggle()){
      // $('p').toggleClass('change-color');
    // }else {
    //   $('p').addClass('change-color');
    // }

  // })
// })




// Ecco come si scrive ora il js, ma non è ancora riconosciuto ufficialmente. Questione di tempo
// export class pippo {
//   public saluta() {
//     return "ciao"
//
//   }
// }

/*Ecco il risultato di tutto*/

// $('document').ready(function () {
//   $('button').click(function() {
//       $('p').toggleClass('change-color');
//
//   })
//
// })

$('document').ready(function () {
  $('#signup').submit(function(event) {
    event.preventDefault();
    var inputName = $('#name').val();
    var inputSurname = $('#surname').val();
    if (inputName == "" && inputSurname == "") {
      alert("Non puoi lasciare vuoti i campi");
    }else {
      alert("I valori sono: " +inputName+" "+inputSurname)
    }

  })

})
