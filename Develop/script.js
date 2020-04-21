window.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');
});

// assignment code
var generateBtn = document.querySelector("#generate");

// criteria arrays for password prompts
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var numeric = ["0","1","2","3","4","5","6","7","8","9"]
var specialChar = ["!","@","#","$","%","^","&","*","(",")"]


// series of prompts for user to define password criteria
function passwordCriteria() {
  var passwordLength = parseInt(prompt("How long would you like your password to be? Pick a number between 8 and 128"));
  
  // if statement to stop script from running if user does not pick a number between 8 and 128
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please pick a number between 8 and 128");
    return;
  }
  
  var includeLower = confirm("Include lowercase characters?");
  var includeUpper = confirm("Include uppercase characters?");
  var includeNumeric = confirm("Include numbers?");
  var includeSpecial = confirm("Include special characters?");
  
  // if statement to stop password from generating in case user does not pick at least one password criteria
  if (includeLower === false && includeUpper === false && includeNumeric === false && includeSpecial === false) {
    alert("Please include at least one type of character.");
    return;
  }
  
  // transform password criteria into object
  var passwordOptions = {
    passwordLength: passwordLength,
    includeLower: includeLower,
    includeUpper: includeUpper,
    includeNumeric: includeNumeric,
    includeSpecial: includeSpecial,
  }
  return passwordOptions
}

// create password
function generatePassword(){

  // create a new empty array to store possible password options
  var passwordOptions = passwordCriteria();
  var possibleCharacters = [];
  
  // if statements to add password options to empty array
  if (passwordOptions.includeLower === true){
    possibleCharacters = possibleCharacters.concat(lowerCase)
  }
  if (passwordOptions.includeUpper === true){
    possibleCharacters = possibleCharacters.concat(upperCase)
  }
  if (passwordOptions.includeNumeric === true){
    possibleCharacters = possibleCharacters.concat(numeric)
  }
  if (passwordOptions.includeSpecial === true){
    possibleCharacters = possibleCharacters.concat(specialChar)
  }
  
  // transform password options array into string
  var possibleCharStr = possibleCharacters.join(""); 
  
  // create empty string for password characters to be added to
  password = ""; 

  // for loop to pull characters at random from password options string
  for (var i = 0, n = possibleCharacters.length; i < passwordOptions.passwordLength; i++){
    password += possibleCharStr.charAt(Math.floor(Math.random() * n));
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);