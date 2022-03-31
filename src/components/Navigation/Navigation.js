import { Link } from './Navigation.styled';

export default function Navigation() {
  return (
    <nav>
      <Link exact to="/">
        Home
      </Link>

      <Link to="movies">Movies</Link>
    </nav>
  );
}
