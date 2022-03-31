import PropTypes from 'prop-types';

const KEY = '0a29e3a518908cfc1b2eed264f85542b';
const BASE_URL = 'https://api.themoviedb.org/3';

async function fetchWithErrorHandling(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Nothing found for this query'));
}

export function fetchTrendingMovies() {
  return fetchWithErrorHandling(
    `${BASE_URL}/trending/movie/day?api_key=${KEY}`
  );
}

export function fetchSearchMovies(searchQuery) {
  return fetchWithErrorHandling(
    `${BASE_URL}/search/movie?api_key=${KEY}&language=en-US&query=${searchQuery}&page=1`
  );
}

export function fetchGetMovieDetails(movie_id) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${movie_id}?api_key=${KEY}&language=en-US`
  );
}

export function fetchGetMovieCredits(movie_id) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${movie_id}/credits?api_key=${KEY}&language=en-US`
  );
}

export function fetchGetMovieReviews(movie_id) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${movie_id}/reviews?api_key=${KEY}&language=en-US&page=1`
  );
}

fetchGetMovieCredits.propTypes = {
  id: PropTypes.number.isRequired,
};
