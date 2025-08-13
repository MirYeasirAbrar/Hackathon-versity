import React, { useState } from "react";

const AnnouncementPage = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [subscribed, setSubscribed] = useState(true);

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
      content:
        "Check out the new C++ learning materials in the resources section.",
      priority: "General",
      category: "Resources",
      date: "2025-08-05",
    },
  ];

  const archives = [
    { id: 1, title: "Past Hackathon Winners", date: "2025-06-15" },
    { id: 2, title: "April Meetup Summary", date: "2025-04-20" },
    { id: 3, title: "Resource Archive Update", date: "2025-03-10" },
  ];

  const filteredAnnouncements = announcements.filter((a) => {
    const matchesSearch =
      a.title.toLowerCase().includes(search.toLowerCase()) ||
      a.content.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "All" || a.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <h1 className="text-3xl font-bold text-center">
        📢 Announcements & News
      </h1>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 justify-between">
        <SearchFilter search={search} setSearch={setSearch} />
        <CategoryFilter category={category} setCategory={setCategory} />
        <SubscribeToggle
          subscribed={subscribed}
          setSubscribed={setSubscribed}
        />
      </div>

      {/* Announcements */}
      <AnnouncementList announcements={filteredAnnouncements} />

      {/* Archive */}
      <div className="mt-10">
        <h2 className="text-xl font-bold">🗄 News Archive</h2>
        <p className="opacity-70 text-sm">
          Older announcements will appear here for reference.
        </p>
        <ArchiveList archives={archives} />
      </div>
    </div>
  );
};

export default AnnouncementPage;
