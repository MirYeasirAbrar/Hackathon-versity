import React from "react";
import ArchiveItem from "./ArchiveItem";

const ArchiveList = ({ archives }) => {
  return (
    <div className="space-y-2">
      {archives.map((a) => (
        <ArchiveItem key={a.id} {...a} />
      ))}
    </div>
  );
};

export default ArchiveList;
