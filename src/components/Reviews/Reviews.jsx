import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from "react-router-dom";
import { getMovieReviews } from 'services/api';
import { ReviewsItem } from './ReviewsItem';

export const Reviews = () => {
    const { id } = useParams();
    const [reviews, setReviews] = useState(null);

    useEffect(() => {
        const fetchReviews = async () => {
            if (!id) {
        return;
      }
      try {
        const data = await getMovieReviews(id);
          setReviews(data);
          
          if (data.results.length === 0) {
            console.log('No reviews');
          }
      } catch (error) {
          console.log(error);
      } finally {
      }
    };
    fetchReviews();
    }, [id])

    console.log(reviews);

    return (
        <ul>
            {reviews && <ReviewsItem reviews={reviews.results}/>}
        </ul>
    )
    
  };