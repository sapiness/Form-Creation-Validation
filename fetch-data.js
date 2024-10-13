async function fetchUserData() {
    const apiUrl = fetch('https://jsonplaceholder.typicode.com/users')

    const dataContainer = document.getElementById('api-data');

    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const users = await response.json()
            // return users;  
        dataContainer.innerHTML = '';

        const userList = `<ul></ul>`;

        users.forEach(user => {
            userList += `<li>${user.name}</li>`;
            
        });
        userList += dataContainer;

    } catch (error) {
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
        }
 
}
document.addEventListener("DOMContentLoaded",fetchUserData());