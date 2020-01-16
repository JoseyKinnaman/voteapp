$(document).ready(function(){
 var ageInput = $("#age-input");
 var ageBtn = $("#age-btn");

 ageBtn.click(function(event){
  event.preventDefault();
  var age = parseInt(ageInput.val());
  
  if(age >= 18){
    $("#under").hide();
    $("#over").show();
  } else if (age < 18) {
    $("#over").hide();
    $("#under").show();
  } else {
    console.log("error")
  }
 });
});