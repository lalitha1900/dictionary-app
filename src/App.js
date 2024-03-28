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
    if (!searchTerm.trim()) {
      setSearchResult("Word not found in the dictionary.");
      return;
    }

    const foundWord = dictionary.find(
      (entry) => entry.word.toLowerCase() === searchTerm.toLowerCase()
    );

    setSearchResult(
      foundWord ? foundWord.meaning : "Word not found in the dictionary."
    );
  };

  return (
    <div>
      <h1>Dictionary App</h1>
      <input
        type="text"
        placeholder="Search for a word..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <div>
        {
          <p>
            <strong>Definition:</strong>
            <div>{searchResult}</div>
          </p>
        }
      </div>
    </div>
  );
};

export default XDictionary;
