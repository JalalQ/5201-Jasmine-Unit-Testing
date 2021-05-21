//ASSIGNMENT 2: Login Page

window.onload = function () {

    "use strict";
    
    //DOM
    var formHandle = document.forms.authForm;

    var username = document.getElementById("username");
    var password = document.getElementById("password");

    var message = document.getElementsByClassName("message");

    formHandle.onsubmit = function processForm() {

        event.preventDefault();
        
        var validity;

        var userValue = username.value;
        var passValue = password.value;
        
        //calling the checkLogin function located in jasmine/src/login.js
        //checkLogin then calls md5Encrypt function located in the same file.
        validity = checkLogin(userValue, passValue);
        
        if (validity == true) {
            username.classList.add("authForm__input_noError");
            password.classList.add("authForm__input_noError"); 
            message[0].innerHTML = "Welcome back!";
        }
        else if (validity == "No username entered.") {
            username.classList.add("authForm__input_error");
            username.focus();
            message[0].innerHTML = validity;
            return false;
        }
        else if (validity == "No password entered.") {
            password.classList.add("authForm__input_error");
            password.focus();
            message[0].innerHTML = validity;
            return false;
        }
        else if (validity == "Invalid Username or Password.") {
            username.classList.add("authForm__input_error");
            password.classList.add("authForm__input_error");
            message[0].innerHTML = validity;
            return false;
        }


    };

};