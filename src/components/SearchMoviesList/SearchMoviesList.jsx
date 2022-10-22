import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { List, Item, Title, LinkItem } from './SearchMovieList.styled';

const IMG_URL = 'https://image.tmdb.org/t/p/w500/';

export const SearchMoviesList = ({ movies }) => {

  const location = useLocation();

  return (
    <List>
      {movies.map(({ title, id, backdrop_path }) => (
        <Item key={id}>
          <LinkItem state={{ from: location }} to={`/movies/${id}`}>
            {backdrop_path ? (
              <img src={`${IMG_URL}${backdrop_path}`} alt="" width={250} />
                ) : (
              <img src='https://www.svgrepo.com/show/91111/avatar-profile.svg' alt={title} width={140} />
                )}
            <Title>{title}</Title>
          </LinkItem>
        </Item>
      ))}
    </List>
  );
};

SearchMoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
}
