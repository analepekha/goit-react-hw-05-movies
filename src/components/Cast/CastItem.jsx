import PropTypes from 'prop-types';
import { CardWrapper, CastImg, Text, AdditionalText} from './Cast.styled';

export const CastItem = ({ cast }) => {

    const IMG_URL = 'https://image.tmdb.org/t/p/w500/';


    return cast.map(({id, profile_path, original_name, character }) => {
        return (
            <CardWrapper key={id}>
                {profile_path ? (
                    <CastImg src={`${IMG_URL}${profile_path}`} alt={original_name} />
                ) : (
                    <img src='https://www.svgrepo.com/show/91111/avatar-profile.svg' alt={original_name} width={250} height={375} />
                )}
                <Text>{original_name}</Text>
                <AdditionalText>Character: {character}</AdditionalText>
            </CardWrapper>
        );
    })
}

CastItem.propTypes = {
    cast: PropTypes.arrayOf(PropTypes.object).isRequired,
}