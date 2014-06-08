
//CHECK IF INPUT IS NUMBER

var button = document.getElementById('getAnswer');

button.onclick = function checkInput () {
  var integerCheck = document.getElementById('userInput');
  //check if value Not a Number or negative
  if (isNaN(integerCheck.value) || integerCheck.value <= 0) {
    alert("Must input positive numbers.");
  } else {
    calcFactorial();      
  }    
}

//SET UP FUNCTION TO CALCULATE FACTORIAL
function calcFactorial() {
  var factorial = document.getElementById('userInput');
  // 5*4=20
  // 20*3=60
  // 60*2=120
  var reps = (factorial.value-1);
  var newTotal = (factorial.value * reps);
    for (reps = factorial.value-1; reps > 2; reps--) {   
      newTotal = newTotal * (reps-1);
       //console.log("newTotal inside for loop " + newTotal);
    }
    //console.log(newTotal);

  //RETURN FACTORIAL
  alert(newTotal);

}
