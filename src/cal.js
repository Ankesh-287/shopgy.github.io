let num1 = document.getElementById("first");
let operator = document.getElementById("op");
let num2 = document.getElementById("second");
 const one = num1.value;
 const op = operator.value;
 const two = num2.value;
const total  = `${one} + ${op} + ${two}`
eval(total);