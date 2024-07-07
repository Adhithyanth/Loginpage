document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const signupContainer = document.getElementById('signupContainer');
    const showSignup = document.getElementById('showSignup');
    const showLogin = document.getElementById('showLogin');

    // Show signup form
    showSignup.addEventListener('click', function() {
        signupContainer.classList.add('active');
        loginForm.parentElement.classList.remove('active');
    });

    // Show login form
    showLogin.addEventListener('click', function() {
        signupContainer.classList.remove('active');
        loginForm.parentElement.classList.add('active');
    });

    // Handle signup
    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('signupUsername').value;
        const password = document.getElementById('signupPassword').value;

        const users = JSON.parse(localStorage.getItem('users')) || [];
        const userExists = users.some(user => user.username === username);

        if (userExists) {
            alert('Username already exists!');
        } else {
            users.push({ username, password });
            localStorage.setItem('users', JSON.stringify(users));
            alert('Signup successful!');
            signupContainer.classList.remove('active');
            loginForm.parentElement.classList.add('active');
        }
    });

    // Handle login
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('loginUsername').value;
        const password = document.getElementById('loginPassword').value;

        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(user => user.username === username && user.password === password);

        if (user) {
            localStorage.setItem('loggedInUser', JSON.stringify(user));
            window.location.href = 'profile.html';
        } else {
            alert('Invalid username or password!');
        }
    });

    // Initialize forms
    loginForm.parentElement.classList.add('active');
});
