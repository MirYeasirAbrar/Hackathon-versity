import React from 'react';
import { Bell } from 'lucide-react';
import AnnouncementCard from './AnnouncementCard';

const Announcements = () => {
  const announcements = [
    {
      id: 1,
      title: "New Member Registration Open",
      content: "We're accepting new members for Spring 2025 semester. Apply now!",
      date: "2 days ago",
      priority: "high"
    },
    {
      id: 2,
      title: "Hackathon 2025 Results",
      content: "Congratulations to all participants! Winners will be announced soon.",
      date: "1 week ago",
      priority: "normal"
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Recent Announcements</h3>
        <Bell className="h-5 w-5 text-gray-400" />
      </div>
      <div className="space-y-4">
        {announcements.map((announcement) => (
          <AnnouncementCard key={announcement.id} announcement={announcement} />
        ))}
      </div>
      <button className="w-full mt-4 text-center text-blue-600 hover:text-blue-700 text-sm font-medium">
        View All Announcements
      </button>
    </div>
  );
};

export default Announcements;