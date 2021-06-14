function validate() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    



    var error_message = document.getElementById("error_message");

    error_message.style.padding = "10px";

    var text;
    if (name.length < 3) {
        text = "Please Enter valid Username";
        error_message.innerHTML = text;
        return false;
    }
if(email.indexOf("@") == -1 || email.length < 6){
    text = "Please Enter valid Email";
    error_message.innerHTML = text;
    return false;
  }
    if (password.length < 8) {
        text = "Password must be 8 characters contains one capital,small letter,numbers";
        error_message.innerHTML = text;
        return false;
    }
 
    
    return true;
}

function validateee() {
    
    var questionname = document.getElementById("questionname").value;
    var option1 = document.getElementById("option1").value;
    var option2 = document.getElementById("option2").value;
    var option3 = document.getElementById("option3").value;
    var option4 = document.getElementById("option4").value;
    var correctans = document.getElementById("correctans").value;



    var error_message = document.getElementById("error_message");

    error_message.style.padding = "10px";

    var text;
  
    if (questionname.length < 6) {
        text = "The Question can not be blank, please enter the question";
        error_message.innerHTML = text;
        return false;
    }

    if (option1.length < 2) {
        text = "Option 1 can not be blank, Please Enter valid Option";
        error_message.innerHTML = text;
        return false;
    }
    if (option2.length < 2) {
        text = "Option 2 can not be blank, Please Enter valid Option";
        error_message.innerHTML = text;
        return false;
    }

    if (option3.length < 2) {
        text = "Option 3 can not be blank, Please Enter valid Option";
        error_message.innerHTML = text;
        return false;
    }

    if (option4.length < 2) {
        text = "Option 4 can not be blank, Please Enter valid Option";
        error_message.innerHTML = text;
        return false;
    }
    if (correctans.length < 2) {
        text = "Correct answer can not be blank, Please Enter valid Correct answer";
        error_message.innerHTML = text;
        return false;
    }

    return true;
}

function myFunction() {
    var x = document.getElementById("password");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}


