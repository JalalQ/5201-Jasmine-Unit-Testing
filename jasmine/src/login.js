// Authored by Jalaluddin Qureshi, 02/Mar/2021. Winter 2021, Humber College, Canada.
// This file contain the two functions which I wish to test using Jasmine.

/**
 * MD5 Encryption function to encrypt provided string.
 * Returns string of encrypted hash.
 * @param {string} stringIn
 **/
function md5Encrypt(stringIn) {
    "use strict";
    var md5string = new CryptoJS.MD5(stringIn);
    return md5string.toString();
}//END md5Encrypt


/**
 * The function checkLogin takes two input paramaters, and then,
 * (i) first, it validates both the input parameters
 * (ii) on successfull validation, it then evaluates whether to authorize the user login.
 *
 * Input parameters: 
 * (i) username as userName.  
 * (ii) user password as userPass in plain-text format
 *
 * Output paramaters:
 * (i) "Invalid Username or Password." If userName and/ or userPass is invalid
 * (ii) "No username entered." If the userName is an empty string
 * (iii) "No password entered." If the userPass is an empty string.
 * (iv) Boolean true if the userName and userPass matches the values stored.
 *
 * The username and password stored are: chris and summer respectively.
 * In production environment username and password wont be included as comment.
 *
 * The hash form of the password is: "6b1628b016dff46e6fa35684be6acc96".
 **/
function checkLogin(userName, userPass) {
    
    //hard-coding the username and password in an array. Username is
    //stored in plain-text format.
    var login = ["chris", "6b1628b016dff46e6fa35684be6acc96"]
    
    //The input should be in string format, so if the user
    //has provided a non-string input (e.g. integer number) 
    //it should be converted to string for processing.
    userName = String(userName);
    userPass = String(userPass);
    
    //Hashing the password provided by the user for comparision.
    //No need to add .toString(). This has already been added by the 
    // md5Encrypt function.
    userPassHashed = md5Encrypt(userPass);
    
    if (userName === "") {
        return "No username entered.";
    }
    else if (userPass === "") {
        return "No password entered.";
    }
    
    // Based on Boolean algebra absorptive law, we dont need to evaluate
    // "or a valid username is input with an invalid password, or an 
    // invalid username is input with a valid password."
    else if (userName != login[0] || userPassHashed != login[1]) {
        return "Invalid Username or Password.";
    }
    else if (userName === login[0] || userPassHashed === login[1]) {
        return true;
    }
        
}