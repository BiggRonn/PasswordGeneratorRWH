// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  var length = prompt("How many characters in your password?", "Mininum: 8   Maximum: 129");
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
