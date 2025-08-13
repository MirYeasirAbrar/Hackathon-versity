import React from "react";
import AnnouncementItem from "./AnnouncementItem";

const AnnouncementList = ({ announcements }) => {
  return (
    <div className="space-y-4">
      {announcements.length > 0 ? (
        announcements.map((a) => <AnnouncementItem key={a.id} announcement={a} />)
      ) : (
        <p className="text-center opacity-60">No announcements found.</p>
      )}
    </div>
  );
};

export default AnnouncementList;
