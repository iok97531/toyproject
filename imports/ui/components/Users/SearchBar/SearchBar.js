import React from "react";
import { Input } from "semantic-ui-react";

const SearchBar = ({ filterText, handleChange }) => {
  return (
    <Input
      name="filterText"
      value={filterText}
      placeholder="Search..."
      onChange={handleChange}
    />
  );
};

export default SearchBar;
