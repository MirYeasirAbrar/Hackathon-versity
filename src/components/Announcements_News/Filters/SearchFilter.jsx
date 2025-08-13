import React from "react";

const SearchFilter = ({ search, setSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search announcements..."
      className="input input-bordered w-full md:w-1/2"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default SearchFilter;
