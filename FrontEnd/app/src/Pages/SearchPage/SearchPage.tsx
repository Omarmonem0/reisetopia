import { FC } from 'react';
import { HotelCardProps } from '../../Components/Hotels/HotelCard/HotelCard';
import HotelsList from '../../Components/Hotels/HotelsList/HotelList';
import SearchBar from '../../Components/SearchBar/SearchBar';

interface SearchPageProps {

}

const SearchPage: FC<SearchPageProps> = () => {
    const search = () => {
        console.log('Searching...')
    }
    const changeLanguage = () => {
        console.log('Changing language...')
    }
    const dummyData: HotelCardProps[] = [{
        imageUrl: 'https://rt-hotel-images-prod.s3.amazonaws.com/2496_IcePortal_0_thumb.jpg',
        name: 'Grand Hyatt Berlin',
        address: 'Marlene-Dietrich-Platz 2, 10785 Berlin, Germany',
        distanceToCenter: 0,
    },
    {
        imageUrl: 'https://rt-hotel-images-prod.s3.amazonaws.com/2496_IcePortal_1_thumb.jpg',
        name: 'Grand Hyatt Berlin',
        address: 'Marlene-Dietrich-Platz 2, 10785 Berlin, Germany',
        distanceToCenter: 0
    },
    {
        imageUrl: 'https://rt-hotel-images-prod.s3.amazonaws.com/2496_IcePortal_2_thumb.jpg',
        name: 'Grand Hyatt Berlin',
        address: 'Marlene-Dietrich-Platz 2, 10785 Berlin, Germany',
        distanceToCenter: 0
    }]

    return (
        <>
            <SearchBar submit={search} changeLanguage={changeLanguage}/>
            <HotelsList hotelCards={dummyData} />
        </>
    );
};

export default SearchPage;