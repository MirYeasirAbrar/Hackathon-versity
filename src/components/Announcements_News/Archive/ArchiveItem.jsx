import React from "react";

const ArchiveItem = ({ item }) => {
  return (
    <div className="p-3 border-b border-base-300">
      <h3 className="font-semibold">{item.title}</h3>
      <p className="text-sm opacity-70">{item.date}</p>
    </div>
  );
};

export default ArchiveItem;
