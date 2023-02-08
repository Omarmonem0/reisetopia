import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HotelsList from '../../Components/Hotels/HotelsList/HotelList';
import SearchBar from '../../Components/SearchBar/SearchBar';
import { hotelsSelector , changeAppLanguage, pageStatusSelector, fetchHotels } from '../../Store/searchPageSlice';
import { Language } from '../../Store/type';

interface SearchPageProps {

}

const SearchPage: FC<SearchPageProps> = () => {
    const dispatch = useDispatch()
    const pageStatus = useSelector(pageStatusSelector)
    const hotels = useSelector(hotelsSelector)
    
    const search = () => {
        console.log('Searching...')
    }

    const changeLanguage = (language: string) => {
        dispatch(changeAppLanguage(language as Language))
    }


    return (
        <>
            <SearchBar submit={search} changeLanguage={changeLanguage} />
            <HotelsList hotelCards={hotels} />
        </>
    );
};

export default SearchPage;