// Assignment code here

var getPwdLength = function() {

  var passwordLength = prompt("How many characters will your password contain?");

  passwordLength = parseInt(passwordLength);
  console.log(passwordLength);
  
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("A strong password requres a length between 8 and 128 characters, please enter a number between 8 and 128:");
    return getPwdLength();
  } else {
    alert("Excellent, you requested a " + passwordLength + " character password!");
    return passwordLength;  
  }
} 


var getPwdLower = function() {

  var lowerCase = prompt("Would you like to include lower case characters (yes or no)?")
  lowerCase = lowerCase.toLowerCase();
  console.log(lowerCase);
  if (lowerCase != "yes" && lowerCase != "no") {
    alert("Please tell me if you'd like to use lower case characters in your password, type either yes, or no:");
    return getPwdLower();
  } else {
    alert("Excellent, you answered " + lowerCase + " to having lower case characters");
    return lowerCase;
  }

}


var getPwdUpper = function() {

  var upperCase = prompt("Would you like to include upper case characters (yes or no)?")
  upperCase = upperCase.toLowerCase();
  console.log(upperCase);
  if (upperCase != "yes" && upperCase != "no") {
    alert("Please tell me if you'd like to use upper case characters in your password, type either yes, or no:");
    return getPwdUpper();
  } else {
    alert("Excellent, you answered " + upperCase + " to having upper case characters");
    return upperCase;
  }

}


var getPwdNumeric = function() {

  var numericCharacters = prompt("Would you like to include numeric characters (yes or no)?")
  numericCharacters = numericCharacters.toLowerCase();
  console.log(numericCharacters);
  if (numericCharacters != "yes" && numericCharacters != "no") {
    alert("Please tell me if you'd like to use numeric characters in your password, type either yes, or no:");
    return getPwdNumeric();
  } else {
    alert("Excellent, you answered " + numericCharacters + " to having numeric case characters");
    return numericCharacters;
  }

}


var getPwdSpecial = function() {

  var specialCharacters = prompt("Would you like to include special characters (yes or no)?")
  specialCharacters = specialCharacters.toLowerCase();
  console.log(specialCharacters);
  if (specialCharacters != "yes" && specialCharacters != "no") {
    alert("Please tell me if you'd like to use special characters in your password, type either yes, or no:");
    return getPwdSpecial();
  } else {
    alert("Excellent, you answered " + specialCharacters + " to having special characters");
    return specialCharacters;
  }
  
}


var generatePassword = function() {
   // creating password requirements object
  alert("Hello, I will generate a strong password for you. But first, I have a few question. Let's get started!");
  var pwReq = {
    length: getPwdLength(),
    lower: getPwdLower(),
    upper: getPwdUpper(),
    numeric: getPwdNumeric(),
    special: getPwdSpecial()
  }


  if (pwReq.lower == "no" && pwReq.upper == "no" && pwReq.numeric == "no" && pwReq.special == "no") {
    alert("You have to select at least one category: lower case, upper case, numeric or special characters. Please try again.");
    generatePassword();
  } else {
    alert("generating password");
    const lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    
    const upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    
    const numeric = [1,2,3,4,5,6,7,8,9,0];
    
    const special = [" ","!","\"","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\"","^","_","`","{","|","}","~"];
        
    var passwordPool = [ ];
    var password = "";

    if (pwReq.lower == "yes") {passwordPool = passwordPool.concat(lowerCase)};
    if (pwReq.upper == "yes") {passwordPool = passwordPool.concat(upperCase)};
    if (pwReq.numeric == "yes") {passwordPool = passwordPool.concat(numeric)};
    if (pwReq.special == "yes") {passwordPool = passwordPool.concat(special)};
        
    var char = "";
    for (i=0; i < pwReq.length; i++) {
      //console.log("Inside for loop, pwReq length is: " + pwReq.length);
      char = Math.floor(Math.random() * passwordPool.length); 
      //console.log("Char value: " + char + "\n" + "Iteration: " + i);
      password = password + passwordPool[char];
      //console.log("Value of password: " + password);
    }
    
    return password;
   
  }
}

// Provided content starts here

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