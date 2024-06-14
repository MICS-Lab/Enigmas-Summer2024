
function checkPassword0() {
  var password = document.getElementById("password0").value;
  var sha_password = SHA256(password.replace(/ /g, ''));
  if (
    sha_password ==
    "2689367b205c16ce32ed4200942b8b8b1e262dfc70d9bc9fbc77c49699a4f1df"
  ) {
    document.getElementById("enigma0-check").style = "display: block";
    document.getElementById("enigma0-no-check").style = "display: none";
  } else {
    document.getElementById("enigma0-no-check").style = "display: block";
    document.getElementById("enigma0-check").style = "display: none";
    document.getElementById("password0").value = "";
  }
  final_code();
}

checkPassword0();

