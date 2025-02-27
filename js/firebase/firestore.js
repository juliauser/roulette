// Importe as instâncias do Firebase
import { db } from "../firebase/firebase-config.js";
import { doc, setDoc, collection, getDocs, deleteDoc } from "firebase/firestore";

// Função para adicionar um filme à watchlist
export const addToWatchlist = async (userId, movie) => {
  try {
    await setDoc(doc(db, "users", userId, "watchlist", movie.id.toString()), movie);
    console.log("Movie added to watchlist!");
  } catch (error) {
    console.error("Error adding to watchlist:", error);
  }
};

// Função para buscar a watchlist do usuário
export const fetchWatchlist = async (userId) => {
  try {
    const querySnapshot = await getDocs(collection(db, "users", userId, "watchlist"));
    const watchlist = [];
    querySnapshot.forEach((doc) => {
      watchlist.push(doc.data());
    });
    return watchlist;
  } catch (error) {
    console.error("Error fetching watchlist:", error);
  }
};