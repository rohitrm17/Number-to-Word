const delimiter = ' `';

function endecrypt() {

    var encryptValue = document.getElementById("encrypt");
    encryptValue = encryptValue.value.split(delimiter);

    var password = document.getElementById("password");
    password = password.value;

    var msg_itr = 0, pass_itr = 0;

    var decryptAns = document.getElementById("decrypt");
    decryptAns.value = "";

    var tempAns = "";

    while (msg_itr < encryptValue.length) {

        if (encryptValue[msg_itr][password[pass_itr]] == '/')
            break;

        tempAns += encryptValue[msg_itr][password[pass_itr]];

        pass_itr = (pass_itr + 1) % password.length;

        if (tempAns.length % 2 == 0)
            msg_itr++;
    }

    decryptAns.value = tempAns;
}

function showPassword() {

    var decryptAns = document.getElementById("decrypt");

    var eyeStatus = document.getElementById("eye");

    if (eyeStatus.checked)
        decryptAns.setAttribute("type", "text");
    else
        decryptAns.setAttribute("type", "password");
}