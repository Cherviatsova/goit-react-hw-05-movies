import { fetchGetMovieReviews } from '../../services/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Reviews() {
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    fetchGetMovieReviews(movieId).then(result =>
      setReviews([...result.results])
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { movieId } = useParams();
  return (
    <section>
      <ul>
        {reviews &&
          reviews.map(({ author, content, id }) => (
            <li key={id}>
              <h3>
                Author: <span>{author}</span>
              </h3>
              <p>{content}</p>
            </li>
          ))}
        {reviews && reviews.length === 0 && (
          <p>We don't have any reviews for this movie</p>
        )}
      </ul>
    </section>
  );
}
