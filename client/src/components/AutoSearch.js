import React, { Component } from 'react';
import Input from './Input';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';

const movieItems = [
    {
      id: 0,
      title: "Titanic",
      description: "A movie about love",
    },
    {
      id: 1,
      title: "Dead Poets Society",
      description: "A movie about poetry and the meaning of life",
    },
    {
      id: 2,
      title: "Terminator 2",
      description: "A robot from the future is sent back in time",
    },
    {
      id: 3,
      title: "Alien 2",
      description: "Ripley is back for a new adventure",
    },
  ];


const handleOnSearch = (string, results) => {
    console.log(string, results);
};
const handleOnHover = (result) => {
    console.log(result);
};
const handleOnSelect = (item) => {
    console.log(item);
};
const handleOnFocus = () => {
    console.log("Focused");
};
const handleOnClear = () => {
    console.log("Cleared");
};

const AutoSearch = ({ musics }) => {
    return(
        <ReactSearchAutocomplete
        items={ musics }
        fuseOptions={{ keys: ["action"] }} // Search on both fields
        resultStringKeyName="action" // String to display in the results
        onSearch={handleOnSearch}
        onHover={handleOnHover}
        onSelect={handleOnSelect}
        onFocus={handleOnFocus}
        onClear={handleOnClear}
        showIcon={false}
        autoFocus
        />
        
    )
}
export default AutoSearch;


