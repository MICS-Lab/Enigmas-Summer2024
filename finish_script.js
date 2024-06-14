function final_code() {
  var password =
    document.getElementById("password0").value + 
    document.getElementById("password1").value + 
    document.getElementById("password2").value;

  var sha_password = SHA256(
    password.replace(/ /g, "")
  );
  var user_code = sha_password.substring(0, 8).toUpperCase();
  if (
    SHA256(user_code) ==
    "67dd0fd0a29f2a000afea486ba43b886381e94fb34110fe7a55db0b4eefb5f93"
  ) {
    document.getElementById("finish-code").innerHTML =
      'Finish code: <span id="code">' + user_code + "</span>";
  } else {
    document.getElementById("finish-code").innerHTML = "";
  }
}
