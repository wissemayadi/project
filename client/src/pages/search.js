import React from "react";



const Search = ({ setSearch }) => {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Type movie name to search"
        onChange={(e) => setSearch(e.target.value)}
      />
    
    </div>
  );
};

export default Search;