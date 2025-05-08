import './style.css'
import { API_KEY, API_URL } from './constants'
import { getMovies } from './fetcher'
import type { MovieType, ResponseType } from './types';

let datHtml = ''

async function listMovies() {
  const { results: movies } = await getMovies() as unknown as ResponseType
  movies.forEach((movie) => {
    datHtml += renderMovies(movie)
  })

  document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Movie List</h1>
    <div class="movies">
      ${datHtml}
    </div>
    <footer>
      <p>Powered by <a href="https://www.themoviedb.org/">The Movie Database</a></p>
    </footer>
  </div>
`

}

function renderMovies(movie: MovieType) {
  return `
    <div class="movie">
      <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
      <h2>${movie.title}</h2>
      <p>${movie.overview}</p>
    </div>
  `
}

listMovies()

console.log(datHtml);

