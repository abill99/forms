$(document).ready(function(){
  //initialze tooltiops
  $('[data-bs-toggle="tooltip"]').tooltip(); 

  $("form#calculator-form").submit(function(event){
    event.preventDefault();
    const number1 = parseInt($("#number1").val());
    const number2 = parseInt($("#number2").val());
    let result = -99999999;
    const operation = parseInt($("#operation").val());

    result = calculate (number1, number2, operation);
   
    $("#output-data").text(result);
  });

  $("form#calculator-form2").submit(function(event){
    event.preventDefault();
    const number1 = parseInt($("#calculator-form2 #number1").val());
    const number2 = parseInt($("#calculator-form2 #number2").val());
    let result = -99999999;
    const operation = parseInt($("#calculator-form2 #operation").val());

    result = calculate (number1, number2, operation);
   
    $("#output-data").text(result);
  });

  
  $("form#cipher-form").submit(function(event){
    event.preventDefault();
    const word = $("#cipher-form #sentence").val();
    let result = reverseWord(cipher(word));
   
    $("#output-data").text(result);
  });
  

  $("form#cipher-form2").submit(function(event){
    event.preventDefault();
    const word = $("#cipher-form2 #sentence").val();
    let result = reverseWord(cipher(word));
   
    $("#output-data").text(result);
  });


});