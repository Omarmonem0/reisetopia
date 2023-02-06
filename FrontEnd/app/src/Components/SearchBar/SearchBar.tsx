import { FC } from 'react';
import './SearchBar.css';

interface SearchBarProps {
    submit: () => void,
    changeLanguage: () => void
}

const SearchBar: FC<SearchBarProps> = ({ submit, changeLanguage }) => {
    return (
        <>
            <div className='SearchBarContainer'>
                <input className='SearchBox' type="text" placeholder="Search.." />
                <select className='LanguageDropDown' onChange={changeLanguage}>
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