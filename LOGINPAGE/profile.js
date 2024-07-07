document.addEventListener('DOMContentLoaded', function() {
    const usernameDisplay = document.getElementById('username');
    const userDetailsUsername = document.getElementById('userDetailsUsername');
    const logoutButton = document.getElementById('logoutButton');

    // Get the logged-in user's details from localStorage
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

    if (loggedInUser) {
        usernameDisplay.textContent = loggedInUser.username;
        userDetailsUsername.textContent = loggedInUser.username;
    } else {
        // If no user is logged in, redirect to the login page
        window.location.href = 'index.html';
    }

    // Handle logout
    logoutButton.addEventListener('click', function() {
        localStorage.removeItem('loggedInUser');
        window.location.href = 'index.html';
    });
});