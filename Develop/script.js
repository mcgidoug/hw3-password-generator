// all global variables with empty array for final password
let alphabetLowerCase = "abcdefghijklmnopqrstuvwxyz";
let alphabetUpperCase = alphabetLowerCase.toUpperCase();
let randomNumbers = "0123456789";
let specialCharacters = "+-&|!(){}[]^~*?:<>";
let generateBtn = document.querySelector("#generate");

// assigns click to activate write password function
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  let password = generatePassword();

  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// function being called by write password function that GENERATES PASSWORD
function generatePassword() {
  let userNumberPrompt = prompt(
    "Please choose how many characters your password should be."
  );
  let finalPasswordBuild = "";
  let userCharacterChoice = "";

  if (userNumberPrompt >= 8 && userNumberPrompt <= 128) {
    if (confirm("Do you want lowercase?"))
      userCharacterChoice += alphabetLowerCase;
    if (confirm("Do you want uppercase?"))
      userCharacterChoice += alphabetUpperCase;
    if (confirm("Do you want numbers?")) userCharacterChoice += randomNumbers;
    if (confirm("Do you want special characters?"))
      userCharacterChoice += specialCharacters;
  } else {
    alert("Your password MUST be between 8 and 128 characters.");
  }
  for (let i = 0; i < userNumberPrompt; i++) {
    let randomNumber = Math.random() * userCharacterChoice.length;
    let roundedNumber = Math.floor(randomNumber);

    finalPasswordBuild += userCharacterChoice[roundedNumber];
  }
  return finalPasswordBuild;
}
