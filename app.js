const generateBtn = document.querySelector(".button");
const inputField = document.querySelector(".input-field");
const copyIcon = document.querySelector(".copy-icon");

const generatePassword = (length = 8) => {
  const passwordCharacters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*(){}[]/~`";
  let password = "";

  for (let i = 0; i < length; i++) {
    let randomNumber = Math.floor(Math.random() * passwordCharacters.length);
    password += passwordCharacters[randomNumber];
  }

  return password;
};

generateBtn.addEventListener("click", function () {
  const generatedPassword = generatePassword(12);
  inputField.value = generatedPassword;
});

copyIcon.addEventListener("click", function () {
  inputField.select();
  document.execCommand("copy");
  setTimeout(() => {
    inputField.blur();
  }, 200);
});
