function final_code() {
  var password =
    document.getElementById("password0").value + 
    document.getElementById("password1").value + 
    document.getElementById("password2").value + 
    document.getElementById("password3").value + 
    document.getElementById("password4").value + 
    document.getElementById("password5").value + 
    document.getElementById("password6").value + 
    document.getElementById("password7").value;

  var sha_password = SHA256(
    password.replace(/ /g, "")
  );
  var user_code = sha_password.substring(0, 8).toUpperCase();
  if (
    SHA256(user_code) ==
    "f64fe5c0abac9b8feea7fa0f155eba14165175515b8ffd27e4da64e45dc1b7ff"
  ) {
    document.getElementById("finish-code").innerHTML =
      'Finish code: <span id="code">' + user_code + "</span>";
  } else {
    document.getElementById("finish-code").innerHTML = "";
  }
}
