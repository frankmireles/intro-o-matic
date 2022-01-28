/*
0 - Presentación como autoridad o Presentación de etiqueta
1 - Concepto. Dato Relevante o Dato Interesante
2 - Starter
3 - Benefit
4 - Closing
*/
var data = ['a', 'b', 'c', 'd', 'e'];
var adds = 0;

function keepOnly1Checked(lastClicked, notLast){
  var first = document.getElementById(lastClicked);
  var second = document.getElementById(notLast);
  if (first.checked==true){
    second.checked=false;
  }
}

function show(section){
  document.getElementById(section).style.display = "block";
}

function hide(section){
  document.getElementById(section).style.display = "none";
}

function capture(input, preview, index, prefix){
  var textField = document.getElementById(input).value;
  var previewText = document.getElementById(preview);
  data[index] = (prefix + textField);
  textField.value = "";
  previewText.innerHTML = data[index];
  window.alert("Dato capturado, para cambiar lo ingresado solo vuelva a capturar");
}

function captureConcept(){
  var concepto = document.getElementById("concepto").value;
  var adjConcepto = document.getElementById("adjConcepto").value;
  var unionConcepto = document.getElementById("unionConcepto").value;
  var razConcepto = document.getElementById("razConcepto").value;
  var previewText = document.getElementById("q6-ap");
  data[1] = (concepto + " es " + adjConcepto + unionConcepto + razConcepto);
  previewText.innerHTML = data[1];
  window.alert("Dato capturado, para cambiar lo ingresado solo vuelva a capturar");
}

function captureStarter(){
  var starter1 = document.getElementById("starter1").value;
  var starter2 = document.getElementById("starter2").value;
  var starter3 = document.getElementById("starter3").value;
  var previewText = document.getElementById("q7p");
  data[2] = starter1 + starter2 + starter3;
  previewText.innerHTML = data[2];
  window.alert("Dato capturado, para cambiar lo ingresado solo vuelva a capturar");
}

function addStarter(){
  const joins = [' Además ', ' También ', ' Después ', ' Para finalizar '];
  if (data[2] == ''){
    window.alert("Si es el primer concepto presione Capturar");
  } else {
    if (adds < 4){
      var starter2 = document.getElementById("starter2").value;
      var starter3 = document.getElementById("starter3").value;
      var previewText = document.getElementById("q7p");
      data[2] = data[2] + joins[adds] + starter2 + starter3;
      previewText.innerHTML = data[2];
      window.alert("Dato capturado, para cambiar lo ingresado solo vuelva a capturar");
      adds++;
    } else {
      window.alert("Solo se permite ingresar hasta 5 conceptos. Presiona clear para borrar todo.");
    }
  }
}

function clearStarter(){
  var previewText = document.getElementById("q7p");
  data[2] = "";
  adds = 0;
  previewText.innerHTML = data[2];
  window.alert("Enunciado inicial borrado.");
}

function captureBenefit(){
  var benefit1 = document.getElementById("benefit1").value;
  var benefit2 = document.getElementById("benefit2").value;
  var benefit3 = document.getElementById("benefit3").value;
  var previewText = document.getElementById("q9p");
  data[3] = benefit1 + " te " + benefit2 + " para " + benefit3;
  previewText.innerHTML = data[3];
  window.alert("Dato capturado, para cambiar lo ingresado solo vuelva a capturar");
}

function recalculate(){
  var finalOutput = document.getElementById("finalOutput");
  var finalIntro = "";
  for (var i = 0; i < data.length; i++) {
    finalIntro += " " + data[i];
  }
  finalOutput.value = finalIntro;
}
