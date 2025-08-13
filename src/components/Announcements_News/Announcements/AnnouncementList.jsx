import React from "react";
import AnnouncementItem from "./AnnouncementItem";

const AnnouncementList = ({ announcements }) => {
  return (
    <div className="space-y-4">
      {announcements.map((a) => (
        <AnnouncementItem key={a.id} {...a} />
      ))}
    </div>
  );
};

export default AnnouncementList;
