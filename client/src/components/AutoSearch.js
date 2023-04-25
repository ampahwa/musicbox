import React, { Component } from 'react';
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
      description: "Ripley is back for a new advenure",
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

class AutoSearch extends Component {
    render() {
        return(
            <div style={{ width: 200, margin: 20 }}>
            <div style={{ marginBottom: 20 }}>Type "Titanic"</div>
            <ReactSearchAutocomplete
            items={movieItems}
            fuseOptions={{ keys: ["title", "description"] }} // Search on both fields
            resultStringKeyName="title" // String to display in the results
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            onClear={handleOnClear}
            showIcon={false}
            autoFocus
            />
        </div>
        )
    } 
}
export default AutoSearch;


