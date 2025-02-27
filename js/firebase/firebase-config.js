// Importe os módulos necessários do Firebase
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: "SEU_STORAGE_BUCKET",
  messagingSenderId: "SEU_MESSAGING_SENDER_ID",
  appId: "SEU_APP_ID"
};

// // Configuração do Firebase (substitua pelos seus dados)
// const firebaseConfig = {
//   apiKey: "SUA_API_KEY",
//   authDomain: "SEU_AUTH_DOMAIN",
//   projectId: "SEU_PROJECT_ID",
//   storageBucket: "SEU_STORAGE_BUCKET",
//   messagingSenderId: "SEU_MESSAGING_SENDER_ID",
//   appId: "SEU_APP_ID"
// };

// Inicialize o Firebase
const app = initializeApp(firebaseConfig);

// Obtenha as instâncias do Auth e Firestore
const auth = getAuth(app);
const db = getFirestore(app);

// Exporte as instâncias para uso em outros arquivos
export { app, auth, db };