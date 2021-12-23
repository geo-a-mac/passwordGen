// Assignment code here
// arrays hold characters to select from
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var numbers = ['0','1','2','3','4','5','6','7','8','9'];
var specialChars = [' ','!','\"','#','$','%','&','\'','(',')','*','+','\,','-','\.','\/','\:','\;','<','\=','\>','?','@','[','\\','\]','^','_','\`','{','|','}','~'];

/* functions to prompt users for choices length and characters to include - and to validate choices.
Each function return the validated choice */
var getLengthChoice = function() {
  var len = 0;
  while (len < 8 || len > 128) {
    len = window.prompt("Enter the number of characters in your password: min 8, max 128", "8");
  }
  return len;
}

var getUpperCaseChoice = function() {
  var uC = "";
  while (uC !== "Y" && uC !== "y" && uC !== "N" && uC !== "n") {
    uC = window.prompt("Include upper case letters? Y/N.", "Y");
  }
  return uC;
}

var getLowerCaseChoice = function() {
  var lC = "";
  while (lC !== "Y" && lC !== "y" && lC !== "N" && lC !== "n") {
    lC = window.prompt("Include lower case letters? Y/N.", "Y");
  }
  return lC;
}

var getNumericChoice = function() {
  var nC = "";
  while (nC !== "Y" && nC !== "y" && nC !== "N" && nC !== "n") {
    nC = window.prompt("Include numeric chars?", "Y");
  }
  return nC;
}

var getSpecCharsChoice = function() {
  var scC = "";
  while (scC !== "Y" && scC !== "y" && scC !== "N" && scC !== "n") {
    scC = window.prompt("include special characters? Y/N.", "Y");
  }
  return scC;
}

var generatePassword = function() {
  var pwdLength = getLengthChoice();
  var uCase = getUpperCaseChoice();
  var lCase = getLowerCaseChoice();
  var nums = getNumericChoice();
  var specChars = getSpecCharsChoice();
  // validate at lease one set of chars is selected
  
  // based on user selection construct a new array of chars to be randomly chosen
  //debugger;
  var newCharArray = [];
  if (uCase === "Y" || uCase === "y") newCharArray = [...upperCase];
  if (lCase === "Y" || lCase === "y") {
    if (newCharArray.length === 0) {
      newCharArray = [...lowerCase];
    }  else {
      for (let x=0; x<lowerCase.length; x++)
        newCharArray.push(lowerCase[x]);
    } 
  }
  if (nums === "Y" || nums === "y") {
    if (newCharArray.length === 0) {
      newCharArray = [...numbers];
    }  else {
      for (let x=0; x<numbers.length; x++)
        newCharArray.push(numbers[x]);
    } 
  }
  if (specChars === "Y" || specChars === "y") {
    if (newCharArray.length === 0) {
      newCharArray = [...specialChars];
    }  else {
      for (let x=0; x<specialChars.length; x++)
        newCharArray.push(specialChars[x]);
    } 
  }
  if (newCharArray.length > 0) {
    window.alert('You chose: ' + pwdLength + ' characters. Including uppercase: ' + uCase + ', lowercase: ' + lCase + ', numbers: ' + nums + ' and special characters: ' + specChars);
  } else {
    window.alert('You did not choose any characters to include. Start again');
    return " ";
  }

  // array to hold new password
  var newPwd = [];
  for (let i=0; i<pwdLength-1; i++) {
    var newPwdChar = newCharArray[(Math.floor(Math.random()*newCharArray.length)-1)];
    newPwd.push(newPwdChar);
  } 

  return newPwd.join("");
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
