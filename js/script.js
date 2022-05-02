// Assignment code here

var getPwdLength = function() {

  var passwordLength = document.getElementById("pwd-input-box").value;
  
  passwordLength = parseInt(passwordLength);
  console.log(passwordLength);
  
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("A strong password requres a length between 8 and 128 characters, please enter a number between 8 and 128:");
    document.getElementById("pwd-input-box").focus();
  } else {
    return passwordLength;  
  }

} 


var getPwdLower = function() {

  var checkState = document.getElementById("lower-case").checked;
  
  return checkState;

}


var getPwdUpper = function() {

  var checkState = document.getElementById("upper-case").checked;
  
  return checkState;

}


var getPwdNumeric = function() {

  var checkState = document.getElementById("numeric-case").checked;
  
  return checkState;

}


var getPwdSpecial = function() {

  var checkState = document.getElementById("special-case").checked;
  
  return checkState;
  
}


var generatePassword = function() {
  
  // creating password requirements object
  var pwReq = {
    length: getPwdLength(),
    lower: getPwdLower(),
    upper: getPwdUpper(),
    numeric: getPwdNumeric(),
    special: getPwdSpecial()
  }

  if (pwReq.lower == false && pwReq.upper == false && pwReq.numeric == false && pwReq.special == false) {
    alert("You have to select at least one category: lower case, upper case, numeric or special characters. Please try again.");
    return;
  } else {
    const lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    
    const upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    
    const numeric = [1,2,3,4,5,6,7,8,9,0];
    
    const special = [" ","!","\"","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\"","^","_","`","{","|","}","~"];
        
    var passwordPool = [ ];
    var password = "";

    if (pwReq.lower == true) {passwordPool = passwordPool.concat(lowerCase)};
    if (pwReq.upper == true) {passwordPool = passwordPool.concat(upperCase)};
    if (pwReq.numeric == true) {passwordPool = passwordPool.concat(numeric)};
    if (pwReq.special == true) {passwordPool = passwordPool.concat(special)};
        
    var char = "";
    for (i=0; i < pwReq.length; i++) {
      char = Math.floor(Math.random() * passwordPool.length); 
      password = password + passwordPool[char];
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