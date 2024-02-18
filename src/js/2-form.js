const emailForm = document.querySelector(".feedback-form");
const localStorageKey = "feedback-form-state";

let userData = {};

// localStorage value check & take
if (localStorage.getItem(localStorageKey)) {
  try {
    userData = JSON.parse(localStorage.getItem(localStorageKey));
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
  }
  emailForm.elements.email.value = userData.email;
  emailForm.elements.message.value = userData.message;
}

emailForm.addEventListener("input", (event) => {
  userData.email = event.currentTarget.elements.email.value.trim();
  userData.message = event.currentTarget.elements.message.value.trim();
  localStorage.setItem(localStorageKey, JSON.stringify(userData));
});

emailForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // empty check
  if (
    userData.email === "" ||
    userData.message === "" ||
    !Object.keys(userData).length
  ) {
    return alert("Усі поля форми повинні бути заповнені");
  }

  localStorage.removeItem(localStorageKey);
  emailForm.reset();
  console.log(userData);
});
