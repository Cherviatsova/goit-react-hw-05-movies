import { lazy, Suspense, useEffect, useState } from 'react';
import {
  useParams,
  useRouteMatch,
  useLocation,
  useHistory,
  Route,
} from 'react-router-dom';
import { fetchGetMovieDetails } from '../../services/api';
import {
  GoToBackButton,
  Container,
  ContainerInfo,
  ContainerNav,
  TitleNav,
  Link,
} from './MovieDetailsPage.styled';

const Cast = lazy(() => import('../Cast/Cast' /* webpackChunkName: "Cast" */));
const Reviews = lazy(() =>
  import('../Reviews/Reviews' /* webpackChunkName: "Reviews" */)
);

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const { path } = useRouteMatch();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    fetchGetMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  const onGoBack = () => {
    history.push(location?.state?.from ?? './movies');
  };

  return (
    <>
      {movie && (
        <>
          <GoToBackButton type="button" onClick={onGoBack}>
            Go back
          </GoToBackButton>
          <Container>
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title}
              width="300"
            />

            <ContainerInfo>
              <h2>{movie.title}</h2>
              <p>
                <span>Release date: </span>
                {movie.release_date}
              </p>
              <p>
                <span>Popularity: </span>
                {movie.popularity}
              </p>
              <p>
                <span>Overview: </span>
                {movie.overview}
              </p>
              <p>
                <span>Genres: </span>
              </p>
              <ul>
                {movie.genres.map(genre => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
              </ul>
            </ContainerInfo>
          </Container>
        </>
      )}
      <ContainerNav>
        <TitleNav>Additional information</TitleNav>
        <Link
          to={{ pathname: `/movies/${movieId}/cast`, state: location.state }}
        >
          Cast
        </Link>

        <Link
          to={{ pathname: `/movies/${movieId}/reviews`, state: location.state }}
        >
          Reviews
        </Link>
      </ContainerNav>

      <Suspense fallback={<h1>LOADING...</h1>}>
        <Route path={`${path}/cast`}>
          <Cast />
        </Route>
        <Route path={`${path}/reviews`}>
          <Reviews />
        </Route>
      </Suspense>
    </>
  );
}
