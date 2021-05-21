//TESTING WITH JASMINE
describe("Testing checkLogin amd md5Encrypt functions", function(){
    
    describe("md5Encrypt Test To Pass", function(){
        it("should return a 32 character long alphanumeric token when any plain-text password\
           is entered.", function() {
		  var regularExpression = /^[a-z0-9]{32}$/;
          var plainPassword = "anything";  
		  expect(md5Encrypt(plainPassword)).toMatch(regularExpression);
        });
    });//end test to pass for md5Encrypt */
    
    describe("checkLogin Test To Pass", function(){
        it("should return true when the correct username and password (in plain-text)\
            is entered.", function() {
		  var username = "chris";
          var password = "summer";  
		  expect(checkLogin(username,password)).toEqual(true);
        });
    });//end test to pass for checkLogin*/
    
    describe("checkLogin Test To Fail", function(){
        it("should return \"No username entered.\" when username is not entered", function() {
		var username = "";
        var password = "anything";  
		   expect(checkLogin(username,password)).toEqual("No username entered.");
        });
        
        it("should return \"No password entered.\" when password is not entered", function() {
		var username = "someone";
        var password = "";  
		   expect(checkLogin(username,password)).toEqual("No password entered.");
        });
        
        it("should return \"Invalid Username or Password.\" when password does not match\
        but username matches.", function() {
		var username = "chris";
        var password = "letmein";  
		   expect(checkLogin(username,password)).toEqual("Invalid Username or Password.");
        });
        
        it("should return \"Invalid Username or Password.\" when username does not match\
        but password matches.", function() {
		var username = "someone";
        var password = "summer";  
		   expect(checkLogin(username,password)).toEqual("Invalid Username or Password.");
        });
        
        it("should return \"Invalid Username or Password.\" when username and password does\
        not match", function() {
		var username = "someone";
        var password = "letmein";  
		   expect(checkLogin(username,password)).toEqual("Invalid Username or Password.");
        });

    });//end test to fail for checkLogin*/
        
    
});//END MAIN SUITE
