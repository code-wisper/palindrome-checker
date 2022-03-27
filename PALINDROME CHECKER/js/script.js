const textInput = document.querySelector(".form input"),
  checkBtn = document.querySelector(".form button"),
  infoText = document.querySelector(".info-text");

let filterInput;

checkBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let reverseInput = filterInput.split("").reverse().join(""); //split the user's input characters, reverse them and join them back
  infoText.style.display = "block";

  if (filterInput != reverseInput) {
    return (infoText.innerHTML = `No, <span>'${textInput.value}'</span> is not a palindrome!`);
  }
  infoText.innerHTML = `Yes, <span>'${textInput.value}'</span> is a palindrome!`;
});

textInput.addEventListener("keyup", () => {
  filterInput = textInput.value.toLowerCase().replace(/[^A-Z0-9]/gi, ""); //removing all space and special characters from the entered value
  if (filterInput) {
    return checkBtn.classList.add("active");
  }
  infoText.style.display = "none";
  checkBtn.classList.remove("active");
});
