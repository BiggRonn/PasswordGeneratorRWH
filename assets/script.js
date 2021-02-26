// Assignment Code
var generateBtn = document.querySelector("#generate");

var length;
var includeSymbols = true;
var includeNumbers;
var includeUpperCase;
var includeLowerCase;

function generatePassword(){

  //generate a prompt box and ask user for a password length, store in length variable
  var length = prompt("How many characters in your password?", "Mininum: 8   Maximum: 129");
  

  //prompt user to include ("ok") or exclude ("cancel") certain characters in password, store boolean value in variables
  var includeLowerCase = confirm("Include lowercase alphabet?");
  var includeUpperCase = confirm("Include uppercase alphabet?");
  var includeNumbers = confirm("Include numbers?");
  var includeSymbols = confirm("Include symbols?");



  return length;
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


console.log(length);
console.log(includeLowerCase);
console.log(includeUpperCase);
console.log(includeNumbers);
console.log(includeSymbols);
