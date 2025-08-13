import React from "react";
import { Home, Users, Calendar, Settings } from "lucide-react";

const Sidebar = () => {
  const items = [
    { label: "Dashboard", icon: <Home className="h-5 w-5" /> },
    { label: "Users", icon: <Users className="h-5 w-5" /> },
    { label: "Events", icon: <Calendar className="h-5 w-5" /> },
    { label: "Settings", icon: <Settings className="h-5 w-5" /> },
  ];

  return (
    <aside className="w-64 p-4 border-r glass-dark">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-white">Admin Dashboard</h2>
        <p className="text-sm text-slate-200">Control panel</p>
      </div>

      <nav className="space-y-2">
        {items.map(it => (
          <button key={it.label} className="w-full flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/6 transition text-slate-100">
            {it.icon}
            <span>{it.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
