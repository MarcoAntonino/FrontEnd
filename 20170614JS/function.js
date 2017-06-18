var form = document.getElementById("logSignForm");

form.style.width = "600px";
form.style.height = "200px";
form.style.backgroundColor = "grey";
form.style.padding = "20px";

form.addEventListener("submit", function(event){
  event.preventDefault(); //fermo lì, non fare l'azione predefinita
  var inputs = document.getElementsByTagName("input");
  /*Si prende tutti gli elementi che hanno come tagname input*/

  /**/
  for (var i = 0; i < inputs.length; ++i){
    //dando il punto accedo a type, name, value, ecc
    if (inputs[i].value == "") {
        console.log("non puoi lasciare vuoto il campo " + inputs[i].name);
        alert("Non puoi lasciare vuoto il campo " + inputs[i].name);
      }else{
      console.log(inputs[i].value);
      //form.submit();

      //sendToServer(inputs[i].value) come si fa nel mondo reale con ajax
      //è una funzione scritta da noi
    }
  }

});

function waitFor() {

  var inputs = document.getElementsById('name');

  while (inputs.value == "") {

    document.getElementById("button").disabled = true;

  }

}
