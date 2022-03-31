import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../../services/api';
import { Title } from './HomeView.styled';
import MovieList from '../MovieList/MovieList';

export default function HomeView() {
  const [movieList, setMovieList] = useState(null);

  useEffect(() => {
    fetchTrendingMovies().then(response => {
      setMovieList(response.results);
    });
  }, []);

  return (
    <>
      <Title>{movieList && <MovieList list={movieList} />}</Title>
    </>
  );
}
