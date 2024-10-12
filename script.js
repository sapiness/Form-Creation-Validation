document.addEventListener("DOMContentLoaded", function(){

    const form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("form-feedback");
    const username = document.getElementById("username").value;
    const email = document.getElementById("email".value);
    const password = document.getElementById("password").value;


    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passValue = password.value.trim();

    
    form.addEventListener("submit", e => {
       e.preventDefault();
 
    const isValid = true;
    const messages = [];

    if(username.length < 3){
        isValid = false;
        messages.alert("too short");
        
    }

    if(!password.value.length >= 8){
        isValid = false;
        messages.alert("Password must be 8 characters or more");
    }

})

feedbackDiv.style.display = "block";

if(isValid = true){
    feedbackDiv.textContent = "Registration successful!";
}

if(isValid = false){
    feedbackDiv.textContent = " incomplete Registration";
    feedbackDiv.style.color = "#dc3545";
}
    
    })