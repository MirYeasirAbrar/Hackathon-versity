import React from "react";

const UserDashboard = () => {
  const stats = [
    { label: "Total Projects", value: 8, trend: "↑ 2 from last month", positive: true },
    { label: "Active Tasks", value: 14, trend: "↓ 3 from yesterday", positive: false },
    { label: "Completed Tasks", value: 22, trend: "↑ 12% this week", positive: true },
  ];

  const recentActivities = [
    { id: 1, title: "UI Design Updated", date: "2025-08-10", status: "Completed", project: "Website Redesign" },
    { id: 2, title: "API Integration", date: "2025-08-11", status: "In Progress", project: "Mobile App" },
    { id: 3, title: "Bug Fixing", date: "2025-08-12", status: "Pending", project: "Admin Dashboard" },
    { id: 4, title: "Performance Optimization", date: "2025-08-12", status: "In Progress", project: "E-commerce Platform" },
  ];

  const projects = [
    { name: "Website Redesign", progress: 85, deadline: "2025-09-15" },
    { name: "Mobile App", progress: 45, deadline: "2025-10-20" },
    { name: "Admin Dashboard", progress: 30, deadline: "2025-11-05" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex flex-col items-center py-10 px-4 md:px-8">
      {/* Dashboard Header */}
      <header className="w-full max-w-7xl flex justify-between items-center mb-10">
        <h1 className="text-4xl font-bold text-white drop-shadow-lg">
          Dashboard <span className="text-blue-300">Overview</span>
        </h1>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <svg className="w-6 h-6 text-gray-300 absolute left-3 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search..."
              className="bg-white/10 border border-white/20 rounded-xl py-2 pl-10 pr-4 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl transition-colors">
            New Task
          </button>
        </div>
      </header>

      {/* Stats Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-7xl mb-10">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6 hover:scale-[1.02] transition-transform shadow-lg"
          >
            <p className="text-gray-300 text-sm font-medium">{stat.label}</p>
            <div className="flex items-end justify-between mt-2">
              <h2 className="text-3xl font-bold text-white">{stat.value}</h2>
              <p className={`text-xs ${stat.positive ? 'text-green-400' : 'text-red-400'}`}>
                {stat.trend}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* Main Content */}
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Activities */}
        <section className="lg:col-span-2 backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-white">Recent Activities</h2>
            <button className="text-blue-400 hover:text-blue-300 text-sm font-medium">
              View All
            </button>
          </div>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-start p-4 hover:bg-white/5 rounded-xl transition-colors">
                <div className={`w-3 h-3 rounded-full mt-1 flex-shrink-0 ${
                  activity.status === "Completed" ? "bg-green-500" :
                  activity.status === "In Progress" ? "bg-yellow-500" : "bg-red-500"
                }`}></div>
                <div className="ml-4 flex-1">
                  <h3 className="text-white font-medium">{activity.title}</h3>
                  <p className="text-gray-400 text-sm">{activity.project}</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-300 text-sm">{activity.date}</p>
                  <span className={`inline-block mt-1 px-2 py-1 rounded-full text-xs font-medium ${
                    activity.status === "Completed" ? "bg-green-500/30 text-green-200" :
                    activity.status === "In Progress" ? "bg-yellow-500/30 text-yellow-200" :
                    "bg-red-500/30 text-red-200"
                  }`}>
                    {activity.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Progress */}
        <section className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-white mb-6">Projects</h2>
          <div className="space-y-6">
            {projects.map((project, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <h3 className="text-white font-medium">{project.name}</h3>
                  <span className="text-gray-300 text-sm">{project.progress}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
                <p className="text-gray-400 text-xs mt-2">Due: {project.deadline}</p>
              </div>
            ))}
          </div>
          <button className="w-full mt-6 bg-white/10 hover:bg-white/20 border border-white/20 text-white py-2 rounded-xl transition-colors">
            Add New Project
          </button>
        </section>
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default UserDashboard;
=======
export default UserDashboard;
>>>>>>> 2b0fd443e4572a4c9e7c6d41248adef51eda25ff
