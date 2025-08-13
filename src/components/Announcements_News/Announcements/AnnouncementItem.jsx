import React from "react";

const AnnouncementItem = ({ announcement }) => {
  return (
    <div className="card bg-base-200 shadow-lg p-4 flex justify-between items-center">
      <div className="flex-1">
        <h2 className="card-title">{announcement.title}</h2>
        <p className="mt-2">{announcement.content}</p>
        <div className="mt-2 text-sm opacity-70">{announcement.date}</div>
      </div>
      <div className="flex-shrink-0 flex items-center">
        <span
          className={`badge ${
            announcement.priority === "Urgent" ? "badge-error" : "badge-success"
          }`}
        >
          {announcement.priority}
        </span>
      </div>
    </div>
  );
};

export default AnnouncementItem;
