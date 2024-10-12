document.addEventListener("DOMContentLoaded", function(){

    const form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("form-feedback");
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const password = document.getElementById("password");


    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
 
       let isValid = true;
       const messages = [];

    if (usernameValue.length < 3){
        isValid = false;
         messages.push('too short');
        
        
    }

    // if (passwordValue.length < 8){
    //     isValid === false;
    //     messages.push('Password must be 8 characters or more');
    // }

    feedbackDiv.style.display = 'block';
     if (isValid = true){
    feedbackDiv.textContent = "Registration successful!";
    feedbackDiv.style.color = "#28a745";
    } else { 
    feedbackDiv.innerHTML = messages.join + "<br>";
    feedbackDiv.style.color = "#dc3545";
}
    
})
    })