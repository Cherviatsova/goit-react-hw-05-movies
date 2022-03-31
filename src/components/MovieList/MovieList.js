import { Link, useLocation } from 'react-router-dom';
import { List } from './MovieList.styled';
import PropTypes from 'prop-types';

export default function MovieList({ list }) {
  const location = useLocation();

  return (
    <List>
      {list &&
        list.map(({ id, title, name }) => (
          <li key={id}>
            <Link
              to={{
                pathname: `/movies/${id}`,
                state: { from: location },
              }}
            >
              {name ? name : title}
            </Link>
          </li>
        ))}
    </List>
  );
}

MovieList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
};
