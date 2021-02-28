var generateBtn = document.querySelector("#generate");

function generatePassword(){
  var pass = "";

  var length = prompt("Eneter a number 8-128", "Number must be between 8-128 (imclusive)");
  if (length < 8 || length > 128){
    alert("Please enter a number between 8-128 (inclusive");
    generatePassword();
  }

  console.log(length);

  hasLower = confirm("Include lowercase letters in password?");
  console.log(hasLower);

  hasUpper = confirm("Include uppercase letters in password?");
  console.log(hasUpper);

  hasNumber = confirm("Include numbers in password?");
  console.log(hasNumber);

  hasSymbol = confirm("Include symbols in password?");
  console.log(hasSymbol);



  for (i = 0; i < length; i++){
    if (hasLower){
      pass += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    }

    if (hasUpper){
      pass += String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    }

    if (hasNumber) {
      pass += (Math.floor(Math.random() * 9));
    }

    if (hasSymbol){
      pass += randSymbol();
    }

  }






  return pass.slice(0, length);
}

function randSymbol(){
  var symbolString = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~";
  return symbolString[Math.floor(Math.random() * symbolString.length)];
}



function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);