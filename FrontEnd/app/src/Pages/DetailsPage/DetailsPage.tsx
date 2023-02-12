import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchHotelByIdThunk } from '../../Store/detailsPage/detailsPageSlice';
import { hotelSelector, pageStatusSelector, errorSelector } from '../../Store/detailsPage/selectors';
import { AppDisptach } from '../../Store/store';
import DetailsCard from './../../Components/Hotels/DetailsCard/DetailsCard';

interface DetailsPageProps {

}

const DetailsPage: FC<DetailsPageProps> = () => {
    const dispatch = useDispatch<AppDisptach>()
    const pageStatus = useSelector(pageStatusSelector)
    const error = useSelector(errorSelector)
    const hotel = useSelector(hotelSelector)
    const params: any = useParams();

    const getHotelById = () => {
        dispatch(fetchHotelByIdThunk(params.hotelId))
    }

    useEffect(() => {
        getHotelById()
    }, [])

    return (
        <>
            {
                pageStatus === 'loading' ?
                    <div>Loading...</div> :
                    pageStatus === 'failed' ?
                        <div>{error}</div> : pageStatus === 'succeeded' ?
                            <DetailsCard hotel={hotel} /> : <></>
            }
        </>
    );
};

export default DetailsPage;