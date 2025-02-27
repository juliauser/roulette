// auth.js (mock)
const users = []; // Simula um "banco de dados" de usuários

export const login = async (email, password) => {
  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    localStorage.setItem('user', JSON.stringify(user)); // Salva o usuário no localStorage
    return user;
  } else {
    throw new Error('Invalid email or password');
  }
};

export const signup = async (email, password) => {
  const userExists = users.some(u => u.email === email);
  if (userExists) {
    throw new Error('User already exists');
  }

  const newUser = { email, password };
  users.push(newUser);
  localStorage.setItem('user', JSON.stringify(newUser)); // Salva o usuário no localStorage
  return newUser;
};

// Verifica se o usuário está logado
export const getCurrentUser = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};

// // Importe as instâncias do Firebase
// import { auth } from "../firebase/firebase-config.js";
// import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

// // Função de login
// export const login = async (email, password) => {
//   try {
//     const userCredential = await signInWithEmailAndPassword(auth, email, password);
//     return userCredential.user;
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

// // Função de cadastro
// export const signup = async (email, password) => {
//   try {
//     const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//     return userCredential.user;
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };