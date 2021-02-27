// Assignment Code
var generateBtn = document.querySelector("#generate");

var options = {
  length: 0,

  includeLowerCase: true,
  includeUppercase: true,
  
  includeNumbers: true,
  includeSymbols: true

}


function generatePassword(){
passwordCriteria();
//generate a prompt box and ask user for a password length, store in length variable **NEEDS TO RESTRICT INPUT TO GIVEN RANGE**

return passwordMagic(options.length, options.hasLower, options.hasUpper, options.hasNumber, options.hasSymbol);
}

//function to randomnly generate the password with the data provided
function passwordMagic(howLong, hasLower, hasUpper, hasNumber, hasSymbol){
  
  var createdPassword = "";

  if (hasLower){
    createdPassword += getRandomLowercase();
    howLong--;
  }

  if (hasUpper){
    createdPassword += getRandomLowercase();
    howLong--;
  }

  if (hasNumber){
    createdPassword += getRandomLowercase();
    howLong--;
  }

  if (hasSymbol){
    createdPassword += getRandomLowercase();
    howLong--;
  }




return createdPassword;
}

//This method is responsible to prompting the user for password criteria data and storing those results in our global variables.
function passwordCriteria(){
  
    //generate a prompt box and ask user for a password length, store in length variable
    options.length = prompt("How many characters in your password?", "Mininum: 8   Maximum: 129");
      if (options.length < 8 || options.length > 128){
        alert("Invalid Input, Enter # between 8-126 (inclusive).");
        passwordCriteria();
      }
      
      //prompt user to include ("ok") or exclude ("cancel") certain characters in password, store boolean value in variables
    options.includeLowercase = confirm("Include lowercase alphabet?");
    options.includeUppercase = confirm("Include uppercase alphabet?");
    options.includeNumbers = confirm("Include numbers?");
    options.includeSymbols = confirm("Include symbols?");
  

  return options;
  
}

/*This method will return a random uppercase character.

The fromCharCode method is a method of the String class that takes an integer as a parameter and returns the corresponding character from the charset,
in this case we are using UTF-8. The integer we pass as a parameter to the String.fromCharCode is a random number between [65, 90]. 
We got the random integer between [65 ,90] by using a standard random number algorithm. I saw this method in a tutorial and
it did exactly what I was planning on doing to execute the task much more elegantly. I was going to create a new Array of characters and then use the index, 
but the characters are already in the charset if we know the keys, in this assignment we designated UTF-8 in the HTML file.
*/

function getRandomUppercase(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

/*works the same was as above method, except when generating the random numbers we add 97 instead of 65 because we 
want a random number between [97, 122] which we will use to return the charset characters 97-122 which in UTF-8 is the lowercase alphabet.
*/
function getRandomLowercase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

/*This time we mulitply be 10 instead of 26 because we only want random numbers in a range of 10, this time adding 48 to
give us a random number between [48, 57]
*/
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

/* This time all the symbols we wanted to use in our password didn't line up neatly in the UTF-8 code,
I could have used String.fromCharCode(Math.floor(Math.random() * 15) + 33) to give me some of them, or made a slightly
more complex method to give me a random characters from two different ranges of the charset, but this solution was easier. 


*/
function getRandomSymbol() {
  var symbolString = "!#$%&()*+,-./:;<=>?@[\]^_{|}~";
  return symbolString[(Math.floor(Math.random() * symbolString.length))];
}

function getRandomCharacter() {
  var allChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&()*+,-./:;<=>?@[\]^_{|}~";
  return symbolString[(Math.floor(Math.random() * allChars.length))];
}
  




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
