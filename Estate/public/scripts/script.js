const login = document.getElementById("login");
const signUp = document.getElementById("sign-up");
const signUpForm = document.getElementById("signup-form");
const loginForm = document.getElementById("login-form");
const closeButton = document.getElementsByClassName("close");
const form = document.getElementById("form");
const loginBtn = document.getElementById("login-btn");
// modal
const loginModal = document.getElementById("login-modal");
const signUpModal = document.getElementById("sign-up-modal");
const signUpFormModal = document.getElementById("signup-form-modal");
const loginFormModal = document.getElementById("login-form-modal");

const changeForm = (e) => {
  if (e.target.innerText === "ورود") {
    signUpFormModal.classList.remove("d-none");
    loginFormModal.classList.add("d-none");
  } else {
    signUpFormModal.classList.add("d-none");
    loginFormModal.classList.remove("d-none");
  }
};

const closeForm = () => {
  form.classList.add("d-none");
};

const openForm = () => {
  form.classList.remove("d-none");
  console.log(form.classList);
};

login.addEventListener("click", changeForm);
loginModal.addEventListener("click", changeForm);
signUp.addEventListener("click", changeForm);
signUpModal.addEventListener("click", changeForm);
closeButton[0].addEventListener("click", closeForm);
closeButton[1].addEventListener("click", closeForm);
loginBtn.addEventListener("click", openForm);
