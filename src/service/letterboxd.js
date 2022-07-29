import axios from "axios";

export async function getLetterboxdDiary(user) {
  return axios.get(`letterboxd/${user}`).then(response => {
    const movies = response.data.movies.map(movie => ({
      ...movie, 
      rate: movie.rate === '0.5' ? '½'
        : movie.rate === '1.0' ? '★'
        : movie.rate === '1.5' ? '★½'
        : movie.rate === '2.0' ? '★★'
        : movie.rate === '2.5' ? '★★½'
        : movie.rate === '2.0' ? '★★'
        : movie.rate === '2.5' ? '★★½'
        : movie.rate === '3.0' ? '★★★'
        : movie.rate === '3.5' ? '★★★½'
        : movie.rate === '4.0' ? '★★★★'
        : movie.rate === '4.5' ? '★★★★½'
        : movie.rate === '5.0' ? '★★★★★'
        : ''
    }));
    return movies.slice(0, 10);
  }).catch(error => {
    error.response.status === 404 && alert('Usuário letterboxd não encontrado!');
    error.response.status === 500 && alert('Falha ao buscar dados do letterbox!');
  });
}