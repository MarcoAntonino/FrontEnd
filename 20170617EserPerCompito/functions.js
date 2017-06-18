var form = document.getElementById("logSignForm");
var inputs = document.getElementsByTagName("input");


form.addEventListener("submit", function(event){
  event.preventDefault(); //fermo lì, non fare l'azione predefinita
  /*Si prende tutti gli elementi che hanno come tagname input*/

  /**/
  for (var i = 0; i < inputs.length; ++i){
    //dando il punto accedo a type, name, value, ecc
    if (inputs[i].value == "") {
        console.log("non puoi lasciare vuoto il campo " + inputs[i].name);
        //alert("Non puoi lasciare vuoto il campo " + inputs[i].name);

      }else{
      console.log(inputs[i].value);
      //form.submit();

      //sendToServer(inputs[i].value) come si fa nel mondo reale con ajax
      //è una funzione scritta da noi
    }
  }

});

// form.addEventListener("blur", myBlurFunction, true);
//
//   function myBlurFunction() {
//     for (var i = 0; i < inputs.length; i++) {
//
//       if(inputs[i].value== "")
//       {
//         inputs[i].value="Non puoi lasciare questo campo vuoto";
//       }
//
//     }
//
//     }

function disableButton() {

  for (var i = 0; i < inputs.length; i++) {
    if(inputs[i].value.length == 0)
    {
      document.getElementById('button').disabled = true;
    }
    else {
    document.getElementById('button').disabled = false;
    }
  }
}

//disableButton();
