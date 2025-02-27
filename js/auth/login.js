import { login } from './auth.js';

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function validatePassword(password) {
  return password.length >= 6;
}

document.getElementById('login-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (!validateEmail(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  if (!validatePassword(password)) {
    alert('Password must be at least 6 characters long.');
    return;
  }

  document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    try {
      await login(email, password);
      alert('Login successful!');
      window.location.href = 'index.html';
    } catch (error) {
      alert(error.message);
    }
  });
});



// import { login } from "../auth/auth.js";

// document.getElementById('login-form').addEventListener('submit', async (e) => {
//   e.preventDefault();
//   const email = document.getElementById('email').value;
//   const password = document.getElementById('password').value;

//   try {
//     await login(email, password);
//     window.location.href = 'index.html'; // Redirecionar para a página inicial
//   } catch (error) {
//     alert(error.message);
//   }
// });