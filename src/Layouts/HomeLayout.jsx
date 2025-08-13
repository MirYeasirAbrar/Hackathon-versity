import React from "react";
import HeroSection from "../components/Home/HeroSection";
import StatsSection from "../components/Home/StatsSection";
import UpcomingEvents from "../components/Home/UpcomingEvents";
import CountdownTimer from "../components/Home/CountdownTimer";
import Announcements from "../components/Home/Announcements";
import QuickActions from "../components/Home/QuickActions";

const HomeLayout = () => {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <UpcomingEvents />
      <CountdownTimer />
      <Announcements />
      <QuickActions />
    </>
  );
};

export default HomeLayout;
