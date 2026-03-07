import { useRef } from "react";

export const Search = ({ fn }) => {
  const inputRef = useRef();

  const handleSearch = () => {
    const val = inputRef.current.value.trim();
    if (val) fn(val);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div className="search-wrap">
      <input
        ref={inputRef}
        type="text"
        className="search-input"
        placeholder="Search artist or song..."
        onKeyDown={handleKeyDown}
      />
      <button className="search-btn" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};
