
//defining an asynchronous function named fetchUserData

async function fetchUserData(){

    //This URL points to the API endpoint from which you’ll fetch user data.
   const apiUrl = "https://jsonplaceholder.typicode.com/users";

//HTML element where the API data will be displayed 
    const dataContainer = document.getElementById("api-data");

    // Employ a try-catch block to handle the fetching process and potential errors.
    try{
        //asynchronously get data from apiUrl
    const response = await fetch(apiUrl);

    // convert the response to JSON 
    const users = await response.json();
    
    // clear container existing content before appending
    dataContainer.innerHTML = "";

    const userList = document.createElement("ul");

    // Loop through the users array with forEach
    users.forEach(user => {
            List = document.createElement("li");
            List.textContent= `${user.name}`;
            userList.appendChild(List);
        });

    //After the loop, append userList to dataContainer
    dataContainer.appendChild(userList);

}
    catch(error){
        dataContainer.innerHTML = "";
        dataContainer.textContent = "Failed to load user data.";
    }

}

// Invoking fetchUserData on DOMContentLoaded
document.addEventListener("DOMContentLoaded", fetchUserData);
   

