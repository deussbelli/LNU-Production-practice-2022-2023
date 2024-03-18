import React, { useState } from 'react';
import searchBarStyles from "../../styles/SearchBar.module.css";
import axios from 'axios';
import { FaSearch } from "react-icons/fa";
import { URL } from '../constants';
import { Link } from 'react-router-dom';

function SearchBar() {
    const [input, setInput] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const searchItemInStore = async (value) => {
        try {
            if (value.trim() === "") {
                setSearchResults([]);
                return;
            }

            const response = await axios.get(URL + "/items?page=0");

            const filteredResults = response.data.filter(item =>
                item.name.toLowerCase().includes(value.toLowerCase())
            );

            setSearchResults(filteredResults);

        } catch (error) {
            console.log(error);
        }
    };

    const handleChange = (value) => {
        setInput(value);
        searchItemInStore(value);
    };

    return (
        <div className={searchBarStyles.searchBarContainer}>
            <div className={searchBarStyles.searchBar}>
                <FaSearch className={searchBarStyles.searchGlass} />
                <input
                    className={searchBarStyles.searchField}
                    placeholder='Type to search...'
                    value={input}
                    onChange={(e) => handleChange(e.target.value)}
                />
            </div>
            <ul className={searchBarStyles.resultList}>
                {searchResults.map(result => (
                    <li key={result.id} className={searchBarStyles}>
                        <Link className={searchBarStyles.linkText} to={"product/" + result.id}>{result.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SearchBar;