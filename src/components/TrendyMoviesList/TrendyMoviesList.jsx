import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { List, Item, Title, LinkItem} from './TrendyMoviesList.styled';

const IMG_URL = 'https://image.tmdb.org/t/p/w500/';

export const TrendyMoviesList = ({ movies }) => {

  const location = useLocation();
  
  return (
    <List>
      {movies.map(({ title, id ,backdrop_path}) => (
        <Item key={id}>
          <LinkItem state={{ from: location }} to={`/movies/${id}`}>
            <img src={`${IMG_URL}${backdrop_path}`} alt="" width={250} />
            <Title>{title}</Title>
          </LinkItem>
        </Item>
      ))}
    </List>
  );
};

TrendyMoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
}

