import React from "react";

const UserDashboard = () => {
  const stats = [
    { label: "Total Projects", value: 8 },
    { label: "Active Tasks", value: 14 },
    { label: "Completed Tasks", value: 22 },
  ];

  const recentActivities = [
    { id: 1, title: "UI Design Updated", date: "2025-08-10", status: "Completed" },
    { id: 2, title: "API Integration", date: "2025-08-11", status: "In Progress" },
    { id: 3, title: "Bug Fixing", date: "2025-08-12", status: "Pending" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900 flex flex-col items-center py-10 px-4">
      {/* Dashboard Title */}
      <h1 className="text-4xl font-bold text-white mb-10 drop-shadow-lg">
        User Dashboard
      </h1>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6 text-center shadow-lg hover:scale-105 transition-transform"
          >
            <p className="text-gray-300">{stat.label}</p>
            <h2 className="text-3xl font-bold text-white">{stat.value}</h2>
          </div>
        ))}
      </div>

      {/* Recent Activities */}
      <div className="mt-12 w-full max-w-5xl backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-white mb-6">Recent Activities</h2>
        <table className="w-full text-left">
          <thead>
            <tr className="text-gray-300 border-b border-white/20">
              <th className="pb-2">Title</th>
              <th className="pb-2">Date</th>
              <th className="pb-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {recentActivities.map((activity) => (
              <tr key={activity.id} className="border-b border-white/10 hover:bg-white/5">
                <td className="py-3 text-white">{activity.title}</td>
                <td className="py-3 text-gray-300">{activity.date}</td>
                <td className="py-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      activity.status === "Completed"
                        ? "bg-green-500/30 text-green-200"
                        : activity.status === "In Progress"
                        ? "bg-yellow-500/30 text-yellow-200"
                        : "bg-red-500/30 text-red-200"
                    }`}
                  >
                    {activity.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserDashboard;