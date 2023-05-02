var password = document.getElementById("password");
var confirm_password = document.getElementById("repassword");
var passwordAlert = document.getElementById("password-alert");


function validatePassword(){
  if(password.value != confirm_password.value && confirm_password.value != "") {
    passwordAlert.style.display = 'flex';
    passwordAlert.classList.add("alert");
  }
  else{
    passwordAlert.style.display = 'none';
    passwordAlert.classList.remove("alert");
  }
}
function viewPassword(inputPassword) {
  var input = document.getElementById(inputPassword);
  if(input.type == "password"){
    input.type = "text";
  }
  else{
    input.type = "password";
  }
}
password.onchange = validatePassword();
confirm_password.onkeyup = validatePassword();