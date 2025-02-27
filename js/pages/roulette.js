import { getAuth } from "firebase/auth";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from "./firebase-config.js";

const auth = getAuth(app);
const db = getFirestore(app);
const pickMovieButton = document.getElementById('pick-movie');
const resultDiv = document.getElementById('result');

// Pick a random movie from watchlist
pickMovieButton.addEventListener('click', async () => {
  const user = auth.currentUser;
  if (!user) {
    alert('Please log in to use the roulette.');
    return;
  }

  const querySnapshot = await getDocs(collection(db, 'users', user.uid, 'watchlist'));
  const watchlist = [];
  querySnapshot.forEach((doc) => {
    watchlist.push(doc.data());
  });

  if (watchlist.length === 0) {
    resultDiv.textContent = 'Your watchlist is empty!';
    return;
  }

  const randomMovie = watchlist[Math.floor(Math.random() * watchlist.length)];
  resultDiv.innerHTML = `
    <div class="movie-card">
      <img src="https://image.tmdb.org/t/p/w500${randomMovie.poster_path}" alt="${randomMovie.title}">
      <h3>${randomMovie.title}</h3>
      <p>${randomMovie.overview}</p>
    </div>
  `;
});