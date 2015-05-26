var a,b;

function setValues() {
  a = Number(document.getElementById("a").value);
  b = Number(document.getElementById("b").value);
}

function sum() {
  setValues();
  result = a + b;
  document.write("The sum is equal to " +  result);
}

function subtract(){
  setValues();
  result = a - b;
  document.write("The subtraction is equal to " + result);
}

function multiply(){
  setValues();
  result = a * b;
  document.write("The multiplication is equal to " + result);
}

function divide() {
  setValues();
  result = a / b;
  document.write("The division is equal to " + result);
}