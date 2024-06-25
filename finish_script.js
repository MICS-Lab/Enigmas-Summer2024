function final_code() {
  var password =
    document.getElementById("password0").value + 
    document.getElementById("password1").value + 
    document.getElementById("password2").value + 
    document.getElementById("password3").value + 
    document.getElementById("password4").value + 
    document.getElementById("password5").value + 
    document.getElementById("password6").value + 
    document.getElementById("password7").value + 
    document.getElementById("password8").value + 
    document.getElementById("password9").value;

  var sha_password = SHA256(
    password.replace(/ /g, "")
  );
  var user_code = sha_password.substring(0, 8).toUpperCase();
  if (
    SHA256(user_code) ==
    "4b51d5c046e21bfdb8eefe5f0f79b97a8c3189d9a4e0b565e9344264c143a33e"
  ) {
    document.getElementById("finish-code").innerHTML =
      'Finish code: <span id="code">' + user_code + "</span>";
  } else {
    document.getElementById("finish-code").innerHTML = "";
  }
}
