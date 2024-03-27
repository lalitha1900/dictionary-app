import React, { useState } from "react";

const XDictionary = () => {
  // Initialize dictionary state
  const [dictionary, setDictionary] = useState([
    {
      word: "React",
      meaning: "A JavaScript library for building user interfaces.",
    },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." },
  ]);

  // State for storing search term
  const [searchTerm, setSearchTerm] = useState("");
  // State for storing search result
  const [searchResult, setSearchResult] = useState("");

  // Function to handle search
  const handleSearch = () => {
    // Search the dictionary for the search term
    const foundWord = dictionary.find(
      (entry) => entry.word.toLowerCase() === searchTerm.toLowerCase()
    );

    // Update search result
    setSearchResult(
      foundWord ? foundWord.meaning : "Word not found in the dictionary."
    );
  };

  return (
    <div>
      <h1>Dictionary App</h1>
      <input
        type="text"
        placeholder="Enter search term"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <div>
        {searchResult !== "" &&
          searchResult !== "Word not found in the dictionary." && (
            <p>
              <strong>Definition:</strong> {searchResult}
            </p>
          )}
        {searchResult === "Word not found in the dictionary." && (
          <p>{searchResult}</p>
        )}
      </div>
    </div>
  );
};

export default XDictionary;

