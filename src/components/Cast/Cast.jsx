import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from "react-router-dom";
import { getMovieCast } from 'services/api';
import { CastItem } from './CastItem';
import { Loader } from 'components/Loader/Loader';
import { CastList } from './Cast.styled';


const Cast = () => {
    const [cast, setCast] = useState(null);
    const [status, setStatus] = useState('idle');
    const [loading, setLoading] = useState(false);


    const { id } = useParams();

  useEffect(() => {
      const fetchCast = async () => {
        setLoading(true);
        if (!id) {
          return;
        }
      try {
        setStatus('pending')
        const data = await getMovieCast(id);
        setStatus('resolve');
        setCast(data);
      } catch (error) {
        console.log(error);
        setStatus('rejected');
      } finally {
        setLoading(false);
      }
    };
    fetchCast();
    }, [id])
    

      return (
          <>
            {status === 'pending' && loading && <Loader />}
            <CastList>
                {cast && <CastItem cast={cast.cast}/>}
            </CastList>
          </>
        )
    
};

export default Cast;

    