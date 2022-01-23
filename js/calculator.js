function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}

function calculate (number1, number2, operation) {
    switch(operation){
      case 1 : 
       result = add(number1, number2);
       break;
      case 2 :
        result = subtract(number1, number2);
        break;
      case 3 : 
        result = multiply(number1, number2);
        break;
      case 4 :
        result = divide(number1, number2);
        break;
      default:
        result = -99999999;

    }
    return result;
}