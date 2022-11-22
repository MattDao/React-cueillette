import React, { useState } from "react";
import { Plante } from "../../pages/Home";
// import Card from "../card/Card";

interface searchBarProps {
  onChangeSearch: (value: string) => void;
}

const SearchBar = ({ onChangeSearch }: searchBarProps) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearchTerm = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("searchBar", e.currentTarget.value);
    let value = e.currentTarget.value;

    setSearchTerm(value);
    onChangeSearch(value);
  };

  return (
    <>
      <div className="searchBar">
        <input
          type="text"
          name="searchBar"
          id="searchBar"
          placeholder="Recherche ta plante"
          onChange={handleSearchTerm}
          className="imputSearch"
          style={{
            width: "100%",
            borderRadius: "7px",
            padding: "5px",
            marginBottom: "20px",
            marginTop: "20px",
          }}
        />
      </div>
    </>
  );
};

export default SearchBar;
