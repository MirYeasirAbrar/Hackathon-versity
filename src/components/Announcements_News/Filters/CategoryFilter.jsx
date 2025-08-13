import React from "react";

const CategoryFilter = ({ category, setCategory }) => {
  return (
    <select
      value={category}
      onChange={(e) => setCategory(e.target.value)}
      className="border p-2 rounded w-full"
    >
      <option value="All">All</option>
      <option value="Events">Events</option>
      <option value="Meetups">Meetups</option>
      <option value="Resources">Resources</option>
    </select>
  );
};

export default CategoryFilter;
