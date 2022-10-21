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

    const { id } = useParams();

    useEffect(() => {
        const fetchCast = async () => {
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
      }
    };
    fetchCast();
    }, [id])

    console.log(cast);
    

  return (
    <>
        {status === 'pending' && <Loader />}
        <CastList>
            {cast && <CastItem cast={cast.cast}/>}
      </CastList>
    </>
    )
    
};

export default Cast;

    