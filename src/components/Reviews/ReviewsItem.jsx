import { nanoid } from 'nanoid';

export const ReviewsItem = ({ reviews }) => {

    return reviews.map(({ author, content}) => {
        return (
            <li key={nanoid()}>
                <p>Author: {author}</p>
                <p>Character: {content}</p>
            </li>
        );
    })
}