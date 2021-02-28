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

  }






  return pass;
}

function passMagic(len, low, up, num, symb){
  
  var magicPassword;

  for (i = 0; i< len; i++){
    if (low){
      magicPassword += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    }

  }

  return magicPassword; 
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);