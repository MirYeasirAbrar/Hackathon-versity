import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, User, Settings, LogOut, Home, FileText, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const UserDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const stats = [
    { label: "Total Events Joined", value: 8 },
    { label: "Certificates Earned", value: 5 },
    { label: "Pending Invitations", value: 2 },
  ];

  const activities = [
    { id: 1, action: "Joined 'React Workshop'", date: "Aug 10, 2025", status: "Completed" },
    { id: 2, action: "Registered for 'Hackathon 2025'", date: "Aug 12, 2025", status: "Ongoing" },
    { id: 3, action: "Profile updated", date: "Aug 13, 2025", status: "Completed" },
  ];

  const navLinks = [
    { name: "Dashboard", icon: <Home className="h-4 w-4" />, path: "/dashboard" },
    { name: "My Events", icon: <FileText className="h-4 w-4" />, path: "/events" },
    { name: "Notifications", icon: <Bell className="h-4 w-4" />, path: "/notifications" },
    { name: "Settings", icon: <Settings className="h-4 w-4" />, path: "/settings" },
  ];

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <aside className={`fixed md:static top-0 left-0 z-40 w-64 bg-background border-r h-full transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 transition-transform duration-200`}>
        <div className="flex items-center justify-between px-4 h-16 border-b">
          <h1 className="text-lg font-bold">User Dashboard</h1>
          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsSidebarOpen(false)}>
            <X className="h-5 w-5" />
          </Button>
        </div>
        <nav className="p-4 space-y-2">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.path} className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium hover:bg-accent transition">
              {link.icon}
              {link.name}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <header className="flex items-center justify-between h-16 border-b px-4 bg-background">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsSidebarOpen(true)}>
              <Menu className="h-5 w-5" />
            </Button>
            <h2 className="text-lg font-semibold">Welcome Back!</h2>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm">
              <User className="h-5 w-5 mr-1" />
              Profile
            </Button>
            <Button variant="outline" size="sm">
              <LogOut className="h-5 w-5 mr-1" />
              Logout
            </Button>
          </div>
        </header>

        {/* Dashboard Body */}
        <main className="p-4 overflow-auto">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {stats.map((stat, index) => (
              <Card key={index} className="hover:shadow-lg transition">
                <CardHeader>
                  <CardTitle>{stat.label}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">{stat.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left border-b">
                    <th className="pb-2">Action</th>
                    <th className="pb-2">Date</th>
                    <th className="pb-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {activities.map((activity) => (
                    <tr key={activity.id} className="border-b">
                      <td className="py-2">{activity.action}</td>
                      <td>{activity.date}</td>
                      <td>
                        <Badge variant={activity.status === "Completed" ? "success" : "warning"}>
                          {activity.status}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default UserDashboard;
