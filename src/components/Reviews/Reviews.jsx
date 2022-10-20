import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from "react-router-dom";
import { getMovieReviews } from 'services/api';
import { Loader } from 'components/Loader/Loader';

// import { ReviewsItem } from './ReviewsItem';

const Reviews = () => {
    const { id } = useParams();
    const [reviews, setReviews] = useState([]);
    const [status, setStatus] = useState('idle');


    useEffect(() => {
        const fetchReviews = async () => {
            if (!id) {
        return;
      }
          try {
            setStatus('pending')
            const { data } = await getMovieReviews(id);
            setStatus('resolve');
            setReviews(data.results);
          
          // if (data.results.length === 0) {
          //   console.log('No reviews');
          // }
      } catch (error) {
          console.log(error);
          setStatus('rejected');

      } finally {
      }
    };
    fetchReviews();
    }, [id])

  console.log(reviews);
  
  return (
    <>
      {status === 'pending' && <Loader />}
      {reviews.length !== 0 ? (
        <ul>
          {reviews.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <h4>Author: {author}</h4>
                <p>{content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}
    </>
  );

    // return (
    //     <ul>
    //         {reviews && <ReviewsItem reviews={reviews.results}/>}
    //     </ul>
    // )
  //   return (
  //   <>
  //   {
  //     reviews===[] ? (
  //     <p>We don't have any reviews for this movie.</p>
  //   ) : (<ReviewsItem reviews={reviews.results}/>)}
  
  // </> 
  //   )
};
  
export default Reviews;

