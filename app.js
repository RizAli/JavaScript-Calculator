var a,b;

function setValues() {
  a = Number(document.getElementById("a").value);
  b = Number(document.getElementById("b").value);
}

function sum() {
  setValues();
  result = a + b;
  document.getElementById('result').innerHTML =  result;
}

function subtract(){
  setValues();
  result = a - b;
  document.getElementById('result').innerHTML = result;
}

function multiply(){
  setValues();
  result = a * b;
  document.getElementById('result').innerHTML = result;
}

function divide() {
  setValues();
  result = a / b;
  document.getElementById('result').innerHTML = result;
}