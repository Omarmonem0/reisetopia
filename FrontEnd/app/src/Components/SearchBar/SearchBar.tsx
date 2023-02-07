import { FC } from 'react';
import { useSelector } from 'react-redux';
import { selectAppLanguage } from '../../Store/selectors';
import './SearchBar.css';

interface SearchBarProps {
    submit: () => void,
    changeLanguage: (e: string) => void
}

const SearchBar: FC<SearchBarProps> = ({ submit, changeLanguage }) => {
    const langugeSelector = useSelector(selectAppLanguage)
    return (
        <>
            <div className='SearchBarContainer'>
                <input className='SearchBox' type="text" placeholder="Search.." />
                <select value={langugeSelector} className='LanguageDropDown' onChange={(e) => changeLanguage(e.target.value)}>
                    <option value="en-US">EN</option>
                    <option value="de-DE">DE</option>
                    <option value="fr-FR">FR</option>
                    <option value="es-ES">ES</option>
                </select>
                <input className='SubmitButton' type="submit" onClick={submit} />
            </div>
        </>
    );
};

export default SearchBar;