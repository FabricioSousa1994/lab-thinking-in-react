import { useState } from 'react';

function SearchBar(props) {
  const [keyword, setKeyword] = useState("");

  function handleKeywordInput(event) {
    setKeyword(event.target.value);
    props.handleSearch(event.target.value);
  }
  return (
    <div>
      <label htmlFor="filter">Search Bar</label>
      <input
        onChange={handleKeywordInput}
        type="text"
        id="filter"
        value={keyword}
      />
    </div>
  );
}
export default SearchBar;