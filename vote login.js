function toggleForm() {
    var loginBox = document.querySelector('.login-box');
    var signupBox = document.querySelector('.signup-box');

    loginBox.style.display = loginBox.style.display === 'none' ? 'block' : 'none';
    signupBox.style.display = signupBox.style.display === 'none' ? 'block' : 'none';
}

function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Add your login logic here
    console.log('Logging in with username:', username);
}

function signup() {
    var newUsername = document.getElementById('newUsername').value;
    var newPassword = document.getElementById('newPassword').value;

    // Add your signup logic here
    console.log('Signing up with username:', newUsername);
}
