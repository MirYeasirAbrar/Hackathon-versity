import React from "react";
import { Star } from "lucide-react";

const AnnouncementCard = ({ announcement }) => {
  const { title, content, date, priority } = announcement;

  return (
    <div
      className={`border-l-4 pl-4 py-2 ${
        priority === "high" ? "border-red-500" : "border-blue-500"
      }`}
    >
      <div className="flex items-start justify-between">
        <div>
          <h4 className="font-medium text-gray-900 mb-1">{title}</h4>
          <p className="text-sm text-gray-600 mb-2">{content}</p>
          <span className="text-xs text-gray-400">{date}</span>
        </div>
        {priority === "high" && (
          <Star className="h-4 w-4 text-red-500 flex-shrink-0 ml-2" />
        )}
      </div>
    </div>
  );
};

export default AnnouncementCard;
