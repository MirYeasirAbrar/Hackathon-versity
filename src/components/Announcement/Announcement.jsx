import React, { useState } from "react";

const Announcement = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [subscribed, setSubscribed] = useState(true);

  // Example data (replace with backend/Firebase later)
  const announcements = [
    {
      id: 1,
      title: "Hackathon Final Round",
      content: "Join us this Friday at 5 PM for the hackathon finals.",
      priority: "Urgent",
      category: "Events",
      date: "2025-08-10",
    },
    {
      id: 2,
      title: "Weekly Coding Meetup",
      content: "Every Wednesday, 7 PM at Room 402.",
      priority: "General",
      category: "Meetups",
      date: "2025-08-07",
    },
    {
      id: 3,
      title: "New Resources Available",
      content: "Check out the new C++ learning materials in the resources section.",
      priority: "General",
      category: "Resources",
      date: "2025-08-05",
    },
  ];

  // Filtering logic
  const filteredAnnouncements = announcements.filter((a) => {
    const matchesSearch =
      a.title.toLowerCase().includes(search.toLowerCase()) ||
      a.content.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "All" || a.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <h1 className="text-3xl font-bold text-center">📢 Announcements & News</h1>

      {/* Search and Category Filter */}
      <div className="flex flex-col md:flex-row gap-4 justify-between">
        <input
          type="text"
          placeholder="Search announcements..."
          className="input input-bordered w-full md:w-1/2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="select select-bordered w-full md:w-1/4"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>All</option>
          <option>Events</option>
          <option>Meetups</option>
          <option>Resources</option>
        </select>
      </div>


      {/* Announcements List */}
      <div className="space-y-4">
        {filteredAnnouncements.map((a) => (
          <div key={a.id} className="card bg-base-200 shadow-lg p-4">
            <div className="flex justify-between items-center">
              <h2 className="card-title">{a.title}</h2>
              <span
                className={`badge ${
                  a.priority === "Urgent" ? "badge-error" : "badge-success"
                }`}
              >
                {a.priority}
              </span>
            </div>
            <p className="mt-2">{a.content}</p>
            <div className="flex justify-between mt-3 text-sm opacity-70">
              <span>{a.category}</span>
              <span>{a.date}</span>
            </div>
          </div>
        ))}

        {filteredAnnouncements.length === 0 && (
          <p className="text-center opacity-60">No announcements found.</p>
        )}
      </div>

      {/* Archive Section */}
      <div className="mt-10">
        <h2 className="text-xl font-bold">🗄 News Archive</h2>
        <p className="opacity-70 text-sm">
          Older announcements will appear here for reference.
        </p>
        {/* In real app: fetch old data from backend/Firebase */}
      </div>
    </div>
  );
};

export default Announcement;
