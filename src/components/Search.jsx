// Your code looks good, but I've made a few minor adjustments for clarity and best practices:

// jsx
import { useRef } from "react";

export const Search = ({ fn }) => {
  const artistRef = useRef(); // Changed variable name to artistRef for clarity

  return (
    <>
      <center className="search">
      <label>Artist Name</label>
        <input
          ref={artistRef}
          type="text"
          className="form-control"
          placeholder="Search Artist Wise Song"
        />
        <button
          className="btn btn-success"
          onClick={() => {
            fn(artistRef.current.value.trim()); // Added trim() to remove whitespace
          }}
        >
          Search It
        </button>
      </center>
    </>
  );
};
