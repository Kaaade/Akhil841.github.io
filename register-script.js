function makeAccount() {
  var output = document.getElementById("result");
  var password1 = document.getElementById("pw");
  var password2 = document.getElementById("pw2");
  if (password1.value === password2.value) {
    output.innerHTML = "Success!";
  }
  else {
    output.innerHTML = "Passwords do not match.";
  }
}
