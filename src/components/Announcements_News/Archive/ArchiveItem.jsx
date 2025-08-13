import React from "react";

const ArchiveItem = ({ title, date }) => {
  return (
    <div className="border p-2 rounded flex justify-between items-center">
      <span>{title}</span>
      <span className="text-sm text-gray-500">{date}</span>
    </div>
  );
};

export default ArchiveItem;
