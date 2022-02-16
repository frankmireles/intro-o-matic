/*
0 - Presentación como autoridad o Presentación de etiqueta
1 - Concepto. Dato Relevante o Dato Interesante
2 - Starter
3 - Benefit
4 - Closing
*/
var data = ['', '', '', '', ''];
var adds = 0;

function keepOnly1Checked(lastClicked, notLast){
  let first = document.getElementById(lastClicked);
  let second = document.getElementById(notLast);
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

function capture(input, index, prefix){
  let textField = document.getElementById(input).value;
  data[index] = (prefix + textField);
  recalculate();
}

function captureConcept(){
  let concepto = document.getElementById("concepto").value;
  let adjConcepto = document.getElementById("adjConcepto").value;
  let unionConcepto = document.getElementById("unionConcepto").value;
  let razConcepto = document.getElementById("razConcepto").value;
  data[1] = (concepto + " es " + adjConcepto + unionConcepto + razConcepto);
  recalculate();
}

function captureStarter(){
  const joins = [' Además, ', ' También, ', ' Después, ', ' Para finalizar, '];
  let starter1 = document.getElementById("starter1").value;
  let starter2 = document.getElementById("starter2").value;
  let starter3 = document.getElementById("starter3").value;
  if (adds === 0) {
    data[2] = starter1 + starter2 + starter3;
    adds++;
  } else if (adds <= 4) {
    data[2] += joins[adds-1] + starter2 + starter3;
    adds++;
  } else {
    window.alert("Solo se permite ingresar hasta 5 conceptos. Presiona clear para borrar todo.");
  }
  recalculate();
}

function clearStarter(){
  data[2] = "";
  adds = 0;
  recalculate();
}

function captureBenefit(){
  let benefit1 = document.getElementById("benefit1").value;
  let benefit2 = document.getElementById("benefit2").value;
  let benefit3 = document.getElementById("benefit3").value;
  data[3] = benefit1 + " te " + benefit2 + benefit3;
  recalculate();
}

function recalculate(){
  let finalOutput = document.getElementById("finalOutput");
  let finalIntro = "";
  for (var i = 0; i < data.length; i++) {
    finalIntro += " " + data[i];
  }
  finalOutput.value = finalIntro;
  //window.scrollTo(0,document.body.scrollHeight);
}
