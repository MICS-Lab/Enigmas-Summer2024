function final_code() {
  var password =
    document.getElementById("password0").value + 
    document.getElementById("password1").value;

  var sha_password = SHA256(
    password.replace(/ /g, "")
  );
  var user_code = sha_password.substring(0, 8).toUpperCase();
  if (
    SHA256(user_code) ==
    "2d9beee763f10f1ae267aa277304ee265755f800c5338d1a8c1e2aa9aab940bf"
  ) {
    document.getElementById("finish-code").innerHTML =
      'Finish code: <span id="code">' + user_code + "</span>";
  } else {
    document.getElementById("finish-code").innerHTML = "";
  }
}
