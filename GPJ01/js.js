"use strict";

////////////// LOGIN MODAL///////////////

const modal = document.querySelector(".my-modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnCloseModal2 = document.querySelector(".submit");
//const btnsOpenModal = document.querySelectorAll(".nav-cta");
const loginButtonTittle = document.querySelector(".nav-cta");

const openModal = function () {
  console.log("Button clicked");
  modal.classList.remove("my-hidden");
  overlay.classList.remove("my-hidden");
};

const closeModal = function () {
  modal.classList.add("my-hidden");
  overlay.classList.add("my-hidden");
};

// for (let i = 0; i < btnsOpenModal.length; i++)
// btnsOpenModal[i].addEventListener("click", openModal);
loginButtonTittle.addEventListener("click", function () {
  if (logined) {
    alert("LogOut Sucessfully");
    logined = false;
    loginButtonTittle.textContent = "Login";
  } else {
    openModal();
  }
});
//. is selecting

btnCloseModal.addEventListener("click", closeModal);
// +() will automatically execute, no () only execute when click
btnCloseModal2.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("my-hidden")) {
    closeModal();
  }
});

////////////// SEE ALL RECIPES //////////////////////
const btnopen2 = document.querySelector(".my-btn-open2");
const modal2 = document.querySelector(".all-recipes-photo");

btnopen2.addEventListener("click", function () {
  if (modal2.classList.contains("my-hidden")) {
    modal2.classList.remove("my-hidden");
    btnopen2.textContent = "Close all recipes";
  } else {
    modal2.classList.add("my-hidden");
    btnopen2.textContent = "See all recipes";
  }
});

/////////////////REGISTER//////////////////////
const btn3 = document.querySelector(".my-register");
const loginTitle = document.querySelector(".login-title");
const loginEmail = document.querySelector(".login-email");

let loginMode = true;

btn3.addEventListener("click", function () {
  if (forgetPassword) {
    myFullName.classList.remove("login-my-hidden");
    loginPassword.classList.remove("login-my-hidden");
  }

  if (loginMode) {
    loginTitle.textContent = "Register";
    btn3.textContent = "Login";
    loginMode = false;
    loginEmail.classList.remove("login-my-hidden");
  } else {
    loginTitle.textContent = "Login";
    btn3.textContent = "Register";
    loginMode = true;
    loginEmail.classList.add("login-my-hidden");
  }
});

/////////////////FORGET PASSWORD/////////////////////
const btn4 = document.querySelector(".my-forget-password");
const myFullName = document.querySelector(".my-full-name");
const loginPassword = document.querySelector(".login-password");

btn4.addEventListener("click", function () {
  myFullName.classList.add("login-my-hidden");
  loginEmail.classList.add("login-my-hidden");

  loginTitle.textContent = "Enter your email and vertify the link";
  loginPassword.classList.add("login-my-hidden");
  loginEmail.classList.remove("login-my-hidden");
  forgetPassword = true;
});

let forgetPassword = false;

/////////////////SUBBIT/////////////////////
const btn5 = document.querySelector(".submit");
let logined = false;

btn5.addEventListener("click", function () {
  if (!forgetPassword) {
    let loginNameValue = document.querySelector("#full-name").value;

    if (loginMode) {
      alert(`Hello,${loginNameValue}, Login Sucessfully, Welcome`);
      logined = true;
      loginButtonTittle.textContent = "LogOut";
    } else {
      alert(`Hello,${loginNameValue}, Register Succesfully, Welcome`);
    }
  } else {
    alert("Vertify link is send to your email !");
    forgetPassword = false;
    myFullName.classList.remove("login-my-hidden");
    loginPassword.classList.remove("login-my-hidden");
  }
});

//////////////////////DisplayMessage/////////////////////

/*const loginForm = document.querySelector(".login-form-box");
const displayMessageBox = document.querySelector(".login-display-message-box");
const displayMessageText = document.querySelector(".login-display-message");

const displayMessage = function () {
  loginForm.classList.add("login-my-hidden");
  loginTitle.textContent = "Display Message";
  displayMessageBox.classList.remove("login-my-hidden");
};
*/
