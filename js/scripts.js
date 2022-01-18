$(document).ready(function(){
  //initialze tooltiops
  $('[data-bs-toggle="tooltip"]').tooltip(); 

  $("form#calculator-form").submit(function(event){
    event.preventDefault();
    console.log("calculator id clicked")
    const number1 = parseInt($("#number1").val());
    const number2 = parseInt($("#number2").val());
    let result = -99999999;
    const operation = parseInt($("#operation").val());

    console.log("operation is " + operation);
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
        console.log("In case default")
        result = -99999999;

    }
   
    $("#output").text(result);

  });


});