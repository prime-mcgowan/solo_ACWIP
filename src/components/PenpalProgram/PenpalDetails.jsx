import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function PenpalDetails() {

    const params = useParams();
    console.log('params:', params);
    const dispatch = useDispatch(); 

    const details = useSelector((store) => store.detail)

    useEffect(()=> {
        dispatch({
            type: 'FETCH_PENPAL_DETAILS',
            payload: params.id //id of penpal
        })
    }, [params.id])

    return (
        <>
        <h1>Penpal Details:</h1>
            <ul>
                <li>{details.name}</li>
                <li>{details.bio_response}</li>
            </ul>
        </>
    )

}

export default PenpalDetails;