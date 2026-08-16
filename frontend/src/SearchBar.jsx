import React, { useState, useEffect } from 'react';
import './SearchBar.css'

const data = [
    'Harvard University',
    'Stanford University',
    'MIT',
    'Caltech',
    'Princeton University',
    'Yale University'
]

export default function SearchBar({ onSelect }) {
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);

    const handleChange = (e) => {
        const value = e.target.value;
        setQuery(value);
        if (value.trim().length > 0) {
            const filtered = data.filter((item) => item.toLowerCase().includes(value.toLowerCase()));
            setSuggestions(filtered);
            setShowDropdown(true);
        } else {
            setSuggestions([]);
            setShowDropdown(false);
        }
    };

    const handleSelect = (suggestion) => {
        setQuery('');
        setSuggestions([]);
        setShowDropdown(false);
        onSelect(suggestion);
    };

    const blur = () => {
        setTimeout(() => setShowDropdown(false), 200);
    }

    return (
        <div className="search-container">

            <div className="search-input-wrapper">
                <input type="text" placeholder="Search for a college..." value={query} onChange={handleChange}
                onFocus={() => query && setShowDropdown(true)} onBlur={blur} className="search-input"
                />
                {query && (
                <button className="clear" onClick={() => { setQuery(''); setSuggestions([]); }}>
                    ✕
                </button>
                )}
            </div>

            {showDropdown && suggestions.length > 0 && (
                <ul className="suggestions">
                    {suggestions.map((suggestion, index) => (
                        <li key={index} onClick={() => handleSelect(suggestion)}>
                            {suggestion}
                        </li>
                    ))}
                </ul>
            )} 

            {showDropdown && query && suggestions.length === 0 && (
                <ul className="none-found">
                    <li>No results found</li>
                </ul>
            )}
        </div> 
        
    );
}