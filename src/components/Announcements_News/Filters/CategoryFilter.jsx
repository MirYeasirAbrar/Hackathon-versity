import React from "react";

const CategoryFilter = ({ category, setCategory }) => {
  return (
    <select
      className="select select-bordered w-full md:w-1/4"
      value={category}
      onChange={(e) => setCategory(e.target.value)}
    >
      <option>All</option>
      <option>Events</option>
      <option>Meetups</option>
      <option>Resources</option>
    </select>
  );
};

export default CategoryFilter;
