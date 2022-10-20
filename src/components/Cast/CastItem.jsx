import PropTypes from 'prop-types';

export const CastItem = ({ cast }) => {

    const IMG_URL = 'https://image.tmdb.org/t/p/w500/';


    return cast.map(({id, profile_path, original_name, character }) => {
        return (
            <li key={id}>
                {profile_path ? (
                    <img src={`${IMG_URL}${profile_path}`} alt={original_name} />
                ) : (
                    <img src="" alt={original_name} />
                )}
                <p>{original_name}</p>
                <p>Character: {character}</p>
            </li>
        );
    })
}

CastItem.propTypes = {
    cast: PropTypes.arrayOf(PropTypes.object).isRequired,
}