import Container from './components/Container/Container';
import { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import AppBar from './components/AppBar/AppBar';

const HomeView = lazy(() => import('./components/HomeView/HomeView'));
const MoviePage = lazy(() => import('components/MoviePage/MoviePage'));
const MovieDetailsPage = lazy(() =>
  import('components/MovieDetailsPage/MovieDetailsPage')
);

export default function App() {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<h1>LOADING..</h1>}>
        <Switch>
          <Route path="/" exact>
            <HomeView />
          </Route>

          <Route path="/movies" exact>
            <MoviePage />
          </Route>

          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>
        </Switch>
      </Suspense>
    </Container>
  );
}
