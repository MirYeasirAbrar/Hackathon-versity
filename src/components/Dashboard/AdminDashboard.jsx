import React, { useMemo, useState } from "react";
import Sidebar from "./AdminDashboardComponent/Sidebar";
import Topbar from "./AdminDashboardComponent/Topbar";
import StatsCard from "./AdminDashboardComponent/StatsCard";
import UsersTable from "./AdminDashboardComponent/UsersTable";
import EventsTable from "./AdminDashboardComponent/EventsTable";
import ApprovalQueue from "./AdminDashboardComponent/ApprovalQueue";

/**
 * AdminDashboard page - composes sidebar, topbar, and content.
 * Uses glassmorphism via the 'glass' utility class (defined in globals.css).
 */
const AdminDashboard = () => {
  // mock state (replace with API hooks)
  const [users, setUsers] = useState([
    {
      id: "u1",
      name: "John Doe",
      email: "john@diu.edu",
      role: "Member",
      status: "Active",
      joinedAt: "2025-06-10",
    },
    {
      id: "u2",
      name: "Jane Smith",
      email: "jane@diu.edu",
      role: "Moderator",
      status: "Active",
      joinedAt: "2025-06-12",
    },
    {
      id: "u3",
      name: "Rahim U.",
      email: "rahim@diu.edu",
      role: "Member",
      status: "Banned",
      joinedAt: "2025-07-01",
    },
  ]);
  const [events, setEvents] = useState([
    {
      id: "e1",
      title: "Hackathon 2025",
      date: "2025-08-20",
      status: "Pending",
      location: "DIU Auditorium",
      published: false,
    },
    {
      id: "e2",
      title: "React Workshop",
      date: "2025-08-25",
      status: "Approved",
      location: "Lab-1",
      published: true,
    },
    {
      id: "e3",
      title: "AI Seminar",
      date: "2025-09-03",
      status: "Rejected",
      location: "Conference Hall",
      published: false,
    },
  ]);

  const stats = useMemo(
    () => ({
      totalUsers: users.length,
      totalEvents: events.length,
      pendingApprovals: events.filter((e) => e.status === "Pending").length,
    }),
    [users, events]
  );

  // small API-like handlers (mock)
  const createUser = (user) => setUsers((prev) => [user, ...prev]);
  const updateUser = (id, patch) =>
    setUsers((prev) => prev.map((u) => (u.id === id ? { ...u, ...patch } : u)));
  const deleteUser = (id) =>
    setUsers((prev) => prev.filter((u) => u.id !== id));

  const createEvent = (ev) => setEvents((prev) => [ev, ...prev]);
  const updateEvent = (id, patch) =>
    setEvents((prev) =>
      prev.map((e) => (e.id === id ? { ...e, ...patch } : e))
    );
  const deleteEvent = (id) =>
    setEvents((prev) => prev.filter((e) => e.id !== id));

  return (
    <div className="flex h-screen bg-gradient-to-tr mt-16 from-slate-50 to-slate-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <main className="p-6 overflow-auto">
          {/* Stats row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <StatsCard title="Total Users" value={stats.totalUsers} />
            <StatsCard title="Total Events" value={stats.totalEvents} />
            <StatsCard
              title="Pending Approvals"
              value={stats.pendingApprovals}
            />
          </div>

          {/* Content area */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <UsersTable
                users={users}
                onCreate={createUser}
                onUpdate={updateUser}
                onDelete={deleteUser}
              />

              <EventsTable
                events={events}
                onCreate={createEvent}
                onUpdate={updateEvent}
                onDelete={deleteEvent}
              />
            </div>

            <div className="space-y-6">
              <ApprovalQueue
                events={events}
                onApprove={(id) => updateEvent(id, { status: "Approved" })}
                onReject={(id) => updateEvent(id, { status: "Rejected" })}
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
