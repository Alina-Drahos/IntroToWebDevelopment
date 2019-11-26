function validateJavaScript() {
    document.getElementById("hide").style.display = "none";
}

function validateInput() {

    var input1 = document.forms["form1"]["name"].value;
    var input2 = document.forms["form1"]["email"].value;
    var input3 = document.forms["form1"]["tele-phone"].value;
    var re = /\S+@\S+/;
    var phoneno = /^\d{10}$/;

    if (input1 == "") {

        alert("Please enter a valid Name!");
        return false;

    }

    if (!re.test(input2)) {
        alert("Please enter a valid e-mail address!");
        return false;
    }

    if (!(input3.match(phoneno))) {
        alert("Please enter a valid phonenumber!");
        return false;
    }

    alert("Congrats! You submitted your information!");
    return false;
}