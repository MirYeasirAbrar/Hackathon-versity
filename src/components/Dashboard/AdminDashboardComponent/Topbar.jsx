import React from "react";
import { Menu, User, LogOut } from "lucide-react";

const Topbar = () => {
  return (
    <header className="flex items-center justify-between h-16 px-6 glass">
      <div className="flex items-center gap-4">
        <button className="md:hidden p-2 rounded-md hover:bg-white/6">
          <Menu className="h-5 w-5 text-slate-700" />
        </button>
        <h3 className="text-lg font-semibold">Welcome, Admin</h3>
      </div>
    </header>
  );
};

export default Topbar;
