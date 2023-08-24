const signupBtn = document.getElementById('signup-btn');
const signinBtn = document.getElementById('signin-btn');

signupBtn.addEventListener('click', () => {

    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the username already exists
    const existingUser = users.find(user => user.username === username);
    if (existingUser) {
        alert('Username already exists. Please choose another.');
        return;
    }

    users.push({ username, password, signinCount: 0 });
    localStorage.setItem('users', JSON.stringify(users));

    alert('Sign up successful. You can now sign in.');
});

signinBtn.addEventListener('click', () => {

    const username = document.getElementById('signin-username').value;
    const password = document.getElementById('signin-password').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        user.signinCount++;
        localStorage.setItem('users', JSON.stringify(users));
        alert(`Welcome back, ${user.username}! You have signed in ${user.signinCount} times.`);
    } else {
        alert('Invalid username or password.');
    }
});