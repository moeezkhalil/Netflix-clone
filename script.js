const modal = document.getElementById("authModal");
const btn = document.getElementById("openModal");
const close = document.querySelector(".close-btn");

btn.onclick = () => modal.style.display = "flex";
close.onclick = () => modal.style.display = "none";

window.onclick = (e) => {
  if (e.target === modal) modal.style.display = "none";
};

// SWITCH FORM
function switchForm(type) {
  const login = document.getElementById("loginForm");
  const signup = document.getElementById("signupForm");
  const title = document.getElementById("formTitle");

  if (type === "signup") {
    login.classList.remove("active");
    signup.classList.add("active");
    title.innerText = "Sign Up";
  } else {
    signup.classList.remove("active");
    login.classList.add("active");
    title.innerText = "Sign In";
  }
}