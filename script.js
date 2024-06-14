
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


function checkPassword2() {
  var password = document.getElementById("password2").value;
  var sha_password = SHA256(password.replace(/ /g, ''));
  if (
    sha_password ==
    "d48ff4b2f68a10fd7c86f185a6ccede0dc0f2c48538d697cb33b6ada3f1e85db"
  ) {
    document.getElementById("enigma2-check").style = "display: block";
    document.getElementById("enigma2-no-check").style = "display: none";
  } else {
    document.getElementById("enigma2-no-check").style = "display: block";
    document.getElementById("enigma2-check").style = "display: none";
    document.getElementById("password2").value = "";
  }
  final_code();
}

checkPassword2();


function checkPassword3() {
  var password = document.getElementById("password3").value;
  var sha_password = SHA256(password.replace(/ /g, ''));
  if (
    sha_password ==
    "2faee31f585e23f714b4298d880f85c71ad3a1a41d5812138ac29e38fdf14800"
  ) {
    document.getElementById("enigma3-check").style = "display: block";
    document.getElementById("enigma3-no-check").style = "display: none";
  } else {
    document.getElementById("enigma3-no-check").style = "display: block";
    document.getElementById("enigma3-check").style = "display: none";
    document.getElementById("password3").value = "";
  }
  final_code();
}

checkPassword3();


function checkPassword4() {
  var password = document.getElementById("password4").value;
  var sha_password = SHA256(password.replace(/ /g, ''));
  if (
    sha_password ==
    "19581e27de7ced00ff1ce50b2047e7a567c76b1cbaebabe5ef03f7c3017bb5b7"
  ) {
    document.getElementById("enigma4-check").style = "display: block";
    document.getElementById("enigma4-no-check").style = "display: none";
  } else {
    document.getElementById("enigma4-no-check").style = "display: block";
    document.getElementById("enigma4-check").style = "display: none";
    document.getElementById("password4").value = "";
  }
  final_code();
}

checkPassword4();


function checkPassword5() {
  var password = document.getElementById("password5").value;
  var sha_password = SHA256(password.replace(/ /g, ''));
  if (
    sha_password ==
    "ce02d4b6d1aceeea96a562c10923d590607df6182b4a3405ad10be85b6354787"
  ) {
    document.getElementById("enigma5-check").style = "display: block";
    document.getElementById("enigma5-no-check").style = "display: none";
  } else {
    document.getElementById("enigma5-no-check").style = "display: block";
    document.getElementById("enigma5-check").style = "display: none";
    document.getElementById("password5").value = "";
  }
  final_code();
}

checkPassword5();

