import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

const EventCard = ({ event }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="font-semibold text-lg text-gray-900 mb-2">{event.title}</h3>
          <div className="flex items-center text-gray-600 text-sm space-x-4 mb-3">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              {event.date}
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {event.time}
            </div>
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-1" />
              {event.location}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">
              {event.participants}/{event.maxParticipants} registered
            </span>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors">
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;