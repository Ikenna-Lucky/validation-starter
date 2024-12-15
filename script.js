// for the span element in the Html file
let nameError = document.querySelector("#name-error");
let phoneError = document.querySelector("#phone-error");
let emailError = document.querySelector("#email-error");
let messageError = document.querySelector("#message-error");
let submitError = document.getElementById("submit-error");

let button = document.getElementById("button");

//THIS FUNCTIONS EXECUTES WHEN THE INPUTS IS KEYED-UP
function nameValidation() {
  let nameContact = document.querySelector("#name-contact").value;

  if (nameContact.length == 0) {
    nameError.innerHTML = "";
    console.log("empty");
    return false;
  } else if (!nameContact.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML =
      '<i class="fa-solid fa-triangle-exclamation"></i> Enter Full Name';
    return false;
  } else {
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
  }
}

function phoneValidation() {
  let phoneContact = document.querySelector("#phone-contact").value;

  if (phoneContact.length == 0) {
    phoneError.innerHTML = "";
    return false;
  } else if (phoneContact.length !== 11) {
    phoneError.innerHTML =
      '<i class="fa-solid fa-triangle-exclamation"></i> Enter Complete Phone no';
    return false;
  } else if (!phoneContact.match(/^[0-9]{11}$/)) {
    phoneError.innerHTML =
      '<i class="fa-solid fa-triangle-exclamation"></i> Only digits needed';
    return false;
  } else {
    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
  }
}
function emailValidation() {
  let emailContact = document.querySelector("#email-contact").value;

  if (emailContact.length == 0) {
    emailError.innerHTML = "";
    return false;
  } else if (!emailContact.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    emailError.innerHTML =
      '<i class="fa-solid fa-triangle-exclamation"></i> inValid email';
    return false;
  } else {
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
  }
}

function messageValid() {
  let messageContact = document.querySelector("#message-contact").value;
  let count = 50;

  if (messageContact.length == 0) {
    messageError.innerHTML = "";
    return false;
  } else if (messageContact.length <= count - 1) {
    messageError.innerHTML =
      count - messageContact.length + "/50 Characters Left";
    return false;
  } else {
    messageError.innerHTML =
      'Complete <i class="fa-solid fa-circle-check"></i>';
    return true;
  }
}
// THIS CODE EXECUTES WHEN THE SUBMIT BUTTON IS CLICKED
button.addEventListener("click", (e) => {
  e.preventDefault();

  if (
    nameValidation() &&
    phoneValidation() &&
    emailValidation() &&
    messageValid()
  ) {
    submitError.innerHTML = "";
  }

  if (!nameValidation()) {
    nameError.innerHTML =
      '<i class="fa-solid fa-triangle-exclamation"></i> Name is required';
  }
  if (!phoneValidation()) {
    phoneError.innerHTML =
      '<i class="fa-solid fa-triangle-exclamation"></i> phone no is required';
  }
  if (!emailValidation()) {
    emailError.innerHTML =
      '<i class="fa-solid fa-triangle-exclamation"></i> email is required';
  }
  if (!messageValid()) {
    messageError.innerHTML =
      '<i class="fa-solid fa-triangle-exclamation"></i> Can\'t be blank';
  }
  submitError.style.display = "block";
  submitError.style.color = "red";
  submitError.innerHTML = "Please Fill in the blank fields to submit";
  setTimeout(() => {
    submitError.style.display = "none";
  }, 5000);
});
