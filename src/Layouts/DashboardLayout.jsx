import React, { useContext } from "react";
import Context from "../Context/Context";
import UserDashboard from "../components/Dashboard/UserDashboard";
import AdminDashboard from "../components/Dashboard/AdminDashboard";

const DashboardLayout = () => {
  const { currUser } = useContext(Context);

  if (!currUser) {
    return <p>Loading dashboard...</p>; // Or a spinner component
  }

  return (
    <>{currUser.role === "admin" ? <AdminDashboard /> : <UserDashboard />}</>
  );
};

export default DashboardLayout;
