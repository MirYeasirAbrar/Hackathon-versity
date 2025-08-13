import React from 'react';
import { ChevronRight } from 'lucide-react';
import EventCard from './EventCard';

const UpcomingEvents = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Programming Contest 2025",
      date: "March 15, 2025",
      time: "10:00 AM",
      location: "DIU Auditorium",
      participants: 45,
      maxParticipants: 100
    },
    {
      id: 2,
      title: "Web Development Workshop",
      date: "March 20, 2025", 
      time: "2:00 PM",
      location: "Lab 301",
      participants: 28,
      maxParticipants: 40
    },
    {
      id: 3,
      title: "Algorithm Study Session",
      date: "March 25, 2025",
      time: "4:00 PM", 
      location: "Room 205",
      participants: 15,
      maxParticipants: 30
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Upcoming Events</h2>
        <a href="#" className="text-blue-600 hover:text-blue-700 flex items-center font-semibold">
          View All <ChevronRight className="h-4 w-4 ml-1" />
        </a>
      </div>
      
      <div className="space-y-6">
        {upcomingEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;