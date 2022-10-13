// import { nanoid } from 'nanoid';
import { Link } from 'react-router-dom';

export const TrendyMoviesList = ({movies} ) => {
  return (
    <ul>
      {movies.map(({ title, id }) => (
        <li key={id}>
          <Link to={`/movies/${id}`}>{title}</Link>
        </li>
      ))}
    </ul>
  );
};
