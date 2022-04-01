// all global variables with empty array for final password
let alphabetLowerCase = "abcdefghijklmnopqrstuvwxyz";
let alphabetUpperCase = alphabetLowerCase.toUpperCase();
let randomNumbers = "0123456789";
let specialCharacters = "+-&|!(){}[]^~*?:<>";
let generateBtn = document.querySelector("#generate");
let passwordText = document.querySelector("#password");

// assigns click to activate write password function
generateBtn.addEventListener("click", generatePassword);

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
    if (userCharacterChoice.length) {
      for (let i = 0; i < userNumberPrompt; i++) {
        let randomNumber = Math.random() * userCharacterChoice.length;
        let roundedNumber = Math.floor(randomNumber);

        finalPasswordBuild += userCharacterChoice[roundedNumber];
      }
    } else {
      alert("You must select at least one set of characters.");
    }
    passwordText.value = finalPasswordBuild;
  } else {
    alert("Your password MUST be between 8 and 128 characters.");
    passwordText.value = "";
  }
}
