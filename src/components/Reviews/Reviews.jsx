import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from "react-router-dom";
import { getMovieReviews } from 'services/api';
import { Loader } from 'components/Loader/Loader';
import { DefaultText, ReviewItem, Title } from './Reviews.styled';


const Reviews = () => {
    const { id } = useParams();
    const [reviews, setReviews] = useState([]);
    const [status, setStatus] = useState('idle');
    const [loading, setLoading] = useState(false);



  useEffect(() => {
    const fetchReviews = async () => {
      setLoading(true);
      if (!id) {
        return;
      }
          
      try {
          setStatus('pending')
          const { data } = await getMovieReviews(id);
          setStatus('resolve');
          setReviews(data.results);
      } catch (error) {
          console.log(error);
          setStatus('rejected');
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
    }, [id])
  
  return (
    <>
      {status === 'pending' && loading && <Loader />}
      {reviews.length !== 0 ? (
        <ul>
          {reviews.map(({ id, author, content }) => {
            return (
              <ReviewItem key={id}>
                <Title>Author: {author}</Title>
                <p>{content}</p>
              </ReviewItem>
            );
          })}
        </ul>
      ) : (
        <DefaultText>We don't have any reviews for this movie.</DefaultText>
      )}
    </>
  );
};
  
export default Reviews;

