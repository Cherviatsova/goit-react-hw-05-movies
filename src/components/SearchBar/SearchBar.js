import {
  SearchForm,
  SearchFormButton,
  SearchFormInput,
  SearchbarHeader,
} from './SearchBar.styled';
import { useState } from 'react';
import propTypes from 'prop-types';

export default function SearchBar({ onSubmit }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = e => {
    setSearchQuery(e.currentTarget.value.toLowerCase().trim());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      alert(
        'Sorry, there are no movies matching your search query. Please try again.'
      );
      return;
    }
    onSubmit(searchQuery);
    reset();
  };

  const reset = () => setSearchQuery('');

  return (
    <SearchbarHeader>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormInput
          onChange={handleChange}
          value={searchQuery}
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
        />

        <SearchFormButton type="submit">Search</SearchFormButton>
      </SearchForm>
    </SearchbarHeader>
  );
}

SearchBar.propTypes = {
  onSubmit: propTypes.func.isRequired,
};
