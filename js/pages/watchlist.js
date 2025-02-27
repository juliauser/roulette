// firestore.js (mock)
let watchlist = []; // Simula a watchlist

export const addToWatchlist = async (movie) => {
  watchlist.push(movie);
  localStorage.setItem('watchlist', JSON.stringify(watchlist)); // Salva no localStorage
  console.log('Movie added to watchlist!');
};

export const fetchWatchlist = async () => {
  const storedWatchlist = localStorage.getItem('watchlist');
  watchlist = storedWatchlist ? JSON.parse(storedWatchlist) : [];
  return watchlist;
};

// import { getAuth } from "firebase/auth";
// import { getFirestore, collection, getDocs } from "firebase/firestore";
// import { app } from "./firebase-config.js";

// const auth = getAuth(app);
// const db = getFirestore(app);
// const watchlistContainer = document.getElementById('watchlist');

// // Fetch watchlist
// async function fetchWatchlist() {
//   const user = auth.currentUser;
//   if (!user) {
//     alert('Please log in to view your watchlist.');
//     return;
//   }

//   const querySnapshot = await getDocs(collection(db, 'users', user.uid, 'watchlist'));
//   const watchlist = [];
//   querySnapshot.forEach((doc) => {
//     watchlist.push(doc.data());
//   });

//   displayWatchlist(watchlist);
// }

// function displayWatchlist(watchlist) {
//   watchlistContainer.innerHTML = watchlist.map(movie => `
//     <div class="movie-card">
//       <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
//       <h3>${movie.title}</h3>
//       <p>${movie.overview}</p>
//     </div>
//   `).join('');
// }

// fetchWatchlist();