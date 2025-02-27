// api.js (mock)
const mockMovies = [
    {
      id: 1,
      title: 'Inception',
      overview: 'A thief who steals corporate secrets through the use of dream-sharing technology.',
      poster_path: '/path/to/poster.jpg'
    },
    {
      id: 2,
      title: 'Interstellar',
      overview: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
      poster_path: '/path/to/poster2.jpg'
    }
  ];
  
  export const fetchPopularMovies = async () => {
    return mockMovies; // Retorna a lista de filmes mockados
  };