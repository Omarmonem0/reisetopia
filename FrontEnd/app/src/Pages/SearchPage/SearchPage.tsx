import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HotelsList from '../../Components/Hotels/HotelsList/HotelList';
import SearchBar from '../../Components/SearchBar/SearchBar';
import { changeAppLanguage, fetchHotelsThunk } from '../../Store/searchPage/searchPageSlice';
import { hotelsSelector , pageStatusSelector, errorSelector } from '../../Store/searchPage/selectors';

import { AppDisptach } from '../../Store/store';
import { Language } from '../../Store/type';

interface SearchPageProps {

}

const SearchPage: FC<SearchPageProps> = () => {
    const dispatch = useDispatch<AppDisptach>()
    const pageStatus = useSelector(pageStatusSelector)
    const error = useSelector(errorSelector)
    const hotels = useSelector(hotelsSelector)
    
    const search = async (searchTerm: string) => {
        console.log(`Searching for ${searchTerm}`)
        await dispatch(fetchHotelsThunk(searchTerm))
    }

    const changeLanguage = (language: string) => {
        dispatch(changeAppLanguage(language as Language))
    }

    return (
        <>
            <SearchBar submit={search} changeLanguage={changeLanguage} />
            {
                pageStatus === 'loading' ?
                <div>Loading...</div> : 
                pageStatus === 'failed' ?
                <div>{error}</div> :
                <HotelsList hotelCards={hotels} />
            }
        </>
    );
};

export default SearchPage;