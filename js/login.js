/**
 * Created by Delyana on 26.11.2016 .
 */

var counter = 5; //counter that keeps track of the possible attempts
function validate() {
       var messages = []; // an array to store the messages of invalid input
     //storing the content from the input fields
    var username = document.getElementById("name").value;
    var password = document.getElementById("password").value;
    //the following is done so that there is one acceptable profile
    if (username == "UserStudent" && password == "Password00") {
        alert("User name and password are correct, the home page will be shown");
        window.location = "index.html";
        return false;
    }
    else {
        counter--;
        alert("You can try " + counter + " more times.");
        //if the login attempts cannot be more than 5, when counter=0 the fields are disabled, thus nothing can be written there
        if (counter == 0) {
            document.getElementById("name").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("login").disabled = true;
            return false;
        }
    }
    if (username.length < 6) {
        messages.push("User name should be longer than 6 characters.");
    }

    if (password.length < 6) {
        messages.push("Password should be longer than 6 characters.");
    }
    if (password.search(/[a-z]/) < 0) {
        messages.push("Password should contain at least one lowercase letter.");
    }
    if (password.search(/[A-Z]/) < 0) {
        messages.push("Password should contain at least one uppercase letter.");
    }
    if (password.search(/[0-9]/) < 0) {
        messages.push("Password should contain at least one digit.");
    }
    if (messages.length > 0) {
        alert(messages.join(" "));
        return false;
    }

}





