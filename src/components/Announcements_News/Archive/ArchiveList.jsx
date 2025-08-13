import React from "react";
import ArchiveItem from "./ArchiveItem";

const ArchiveList = ({ archives }) => {
  return (
    <div className="mt-4 border border-base-300 rounded-lg">
      {archives.length > 0 ? (
        archives.map((a) => <ArchiveItem key={a.id} item={a} />)
      ) : (
        <p className="text-center opacity-60 p-4">No archive data.</p>
      )}
    </div>
  );
};

export default ArchiveList;
