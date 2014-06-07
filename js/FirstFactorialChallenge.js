
//CHECK IF INPUT IS NUMBER

var button = document.getElementById('getAnswer');

button.onclick = function checkInput () {
  var integerCheck = document.getElementById('userInput').value;
  if (isNaN(userInput) || userInput <= 0) {
    alert("Must input positive numbers.");
    return false;
  }
}


//SET UP FUNCTION TO CALCULATE FACTORIAL
// function() {
//   var factorial = document.getElementById('userInput')
//   for (factorial=factorial; factorial > 0; factorial--);
//   factorial = userInput * userInput-1 * ...
// }


//RETURN FACTORIAL

