// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordLength = prompt("How long would you like your password to be? Pick a number between 8 and 128");
  var passwordChar = prompt("Choose your character types:\nL - Lowercase\nU - Uppercase\nN - Numeric\nS - Special").toLowerCase();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
  
  //set password length/complexity
  var complexity = parseInt(passwordLength);

  console.log(complexity)


}
