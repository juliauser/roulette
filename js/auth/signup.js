import { signup } from './auth.js';

document.getElementById('signup-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    await signup(email, password);
    alert('Signup successful!');
    window.location.href = 'index.html';
  } catch (error) {
    alert(error.message);
  }
});