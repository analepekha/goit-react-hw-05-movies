import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

export const TrendyMoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul>
      {movies.map(({ title, id }) => (
        <li key={id}>
          <Link state={{from: location}} to={`/movies/${id}`}>{title}</Link>
        </li>
      ))}
    </ul>
  );
};

TrendyMoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
}

