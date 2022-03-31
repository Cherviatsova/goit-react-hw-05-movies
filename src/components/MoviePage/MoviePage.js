/* eslint-disable react-hooks/exhaustive-deps */
import MovieList from '../MovieList/MovieList';
import { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { fetchSearchMovies } from '../../services/api';
import SearchBar from '../SearchBar/SearchBar';

export default function MoviePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [list, setList] = useState([]);
  const location = useLocation();
  const history = useHistory();

  const getSearchQuery =
    new URLSearchParams(location.search).get('query') ?? '';

  const handleSubmit = nextQuery => {
    setSearchQuery(nextQuery);
  };

  useEffect(() => {
    setSearchQuery(getSearchQuery);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (searchQuery.trim() === '') return;
    fetchSearchMovies(searchQuery).then(response => setList(response.results));
    history.push({ ...location, search: `query=${searchQuery}` });
  }, [searchQuery]);

  useEffect(() => {}, [list]);

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {list && <MovieList list={list} />}
    </>
  );
}
