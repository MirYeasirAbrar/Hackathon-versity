import React from "react";

const AnnouncementItem = ({ title, content, priority, date }) => {
  return (
    <div className="border p-4 rounded flex justify-between items-center">
      <div>
        <h3 className="font-bold">{title}</h3>
        <p className="text-sm text-gray-600">{content}</p>
        <p className="text-xs text-gray-500 mt-1">{date}</p>
      </div>
      <span
        className={`px-2 py-1 rounded text-white text-xs ${
          priority === "Urgent" ? "bg-red-500" : "bg-blue-500"
        }`}
      >
        {priority}
      </span>
    </div>
  );
};

export default AnnouncementItem;
