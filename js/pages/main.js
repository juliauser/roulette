// Dados mockados de filmes
const popularMovies = [
  {
    id: 1,
    title: 'Inception',
    overview: 'A thief who steals corporate secrets through the use of dream-sharing technology.',
    poster_path: 'https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg'
  },
  {
    id: 2,
    title: 'Interstellar',
    overview: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
    poster_path: 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg'
  },
  {
    id: 3,
    title: 'The Dark Knight',
    overview: 'When the menace known as the Joker emerges, Batman must confront chaos.',
    poster_path: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg'
  }
];

// Função para exibir filmes populares
function displayPopularMovies() {
  const moviesContainer = document.getElementById('popular-movies');
  moviesContainer.innerHTML = popularMovies.map(movie => `
    <div class="movie-card">
      <img src="${movie.poster_path}" alt="${movie.title}">
      <h3>${movie.title}</h3>
      <p>${movie.overview}</p>
      <button class="btn btn-primary" onclick="addToWatchlist(${movie.id})">Add to Watchlist</button>
    </div>
  `).join('');
}

// Função mockada para adicionar à watchlist
function addToWatchlist(movieId) {
  const movie = popularMovies.find(m => m.id === movieId);
  if (movie) {
    alert(`Added "${movie.title}" to your watchlist!`);
  }
}

// Função para roletar um filme
function spinRoulette() {
  const resultContainer = document.getElementById('roulette-result');
  const randomMovie = popularMovies[Math.floor(Math.random() * popularMovies.length)];
  resultContainer.innerHTML = `
    <h3>${randomMovie.title}</h3>
    <p>${randomMovie.overview}</p>
  `;
}

// Event listeners
document.getElementById('spin-watchlist').addEventListener('click', spinRoulette);
document.getElementById('add-manually').addEventListener('click', () => {
  alert('Add movies manually (to be implemented).');
});

// Carrega os filmes ao abrir a página
displayPopularMovies();