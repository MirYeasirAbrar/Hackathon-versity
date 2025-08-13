import React from "react";

const SearchFilter = ({ search, setSearch }) => {
  return (
    <input
      type="text"
      placeholder="🔍 Search..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="border p-2 rounded w-full"
    />
  );
};

export default SearchFilter;
