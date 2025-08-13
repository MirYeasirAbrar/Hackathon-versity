import React from 'react';
import { Star } from 'lucide-react';

const AnnouncementCard = ({ announcement }) => {
  return (
    <div className="border-l-4 border-blue-500 pl-4 py-2">
      <div className="flex items-start justify-between">
        <div>
          <h4 className="font-medium text-gray-900 mb-1">{announcement.title}</h4>
          <p className="text-sm text-gray-600 mb-2">{announcement.content}</p>
          <span className="text-xs text-gray-400">{announcement.date}</span>
        </div>
        {announcement.priority === 'high' && (
          <Star className="h-4 w-4 text-red-500 flex-shrink-0 ml-2" />
        )}
      </div>
    </div>
  );
};

export default AnnouncementCard;