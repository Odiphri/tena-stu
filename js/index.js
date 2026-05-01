
function showSignup() {
  document.getElementById("login-form").style.display = "none";
  document.getElementById("register-form").style.display = "block";
  document.getElementById("login-tab").classList.remove("active");
  document.getElementById("register-tab").classList.add("active");
}

function showLogin() {
  document.getElementById("register-form").style.display = "none";
  document.getElementById("login-form").style.display = "block";
  document.getElementById("register-tab").classList.remove("active");
  document.getElementById("login-tab").classList.add("active");
}
