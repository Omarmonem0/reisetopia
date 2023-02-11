import { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { languageSelector } from '../../Store/searchPage/selectors';
import './SearchBar.css';

interface SearchBarProps {
    submit: (searchTerm: string) => void,
    changeLanguage: (e: string) => void
}

const SearchBar: FC<SearchBarProps> = ({ submit, changeLanguage }) => {
    const language = useSelector(languageSelector)
    const [searchTerm, setSearchTerm] = useState('')
    return (
        <>
            <div className='SearchBarContainer'>
                <input className='SearchBox' type="text" placeholder="Search.." onChange={(e) => setSearchTerm(e.target.value)}/>
                <select value={language} className='LanguageDropDown' onChange={(e) => changeLanguage(e.target.value)}>
                    <option value="en-US">EN</option>
                    <option value="de-DE">DE</option>
                    <option value="fr-FR">FR</option>
                    <option value="es-ES">ES</option>
                </select>
                <input className='SubmitButton' type="submit" onClick={() => submit(searchTerm)} />
            </div>
        </>
    );
};

export default SearchBar;