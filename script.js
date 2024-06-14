
function checkPassword0() {
  var password = document.getElementById("password0").value;
  var sha_password = SHA256(password.replace(/ /g, ''));
  if (
    sha_password ==
    "bdd2d3af3a5a1213497d4f1f7bfcda898274fe9cb5401bbc0190885664708fc2"
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


function checkPassword1() {
  var password = document.getElementById("password1").value;
  var sha_password = SHA256(password.replace(/ /g, ''));
  if (
    sha_password ==
    "670671cd97404156226e507973f2ab8330d3022ca96e0c93bdbdb320c41adcaf"
  ) {
    document.getElementById("enigma1-check").style = "display: block";
    document.getElementById("enigma1-no-check").style = "display: none";
  } else {
    document.getElementById("enigma1-no-check").style = "display: block";
    document.getElementById("enigma1-check").style = "display: none";
    document.getElementById("password1").value = "";
  }
  final_code();
}

checkPassword1();

