import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DashSidebar from "../components/DashSidebar";
import DashProfile from "../components/DashProfile";
import DashPosts from "../components/DashPosts";
import DashUser from "../components/DashUser";
import DashComments from "../components/DashComments";
import DashboardComp from "../components/DashboardComp";
export default function Dashboard() {
  const location = useLocation();
  const [tab, setTab] = useState("");
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="md:w-56">
        {/* Sidebar */}
        <DashSidebar />
      </div>
      {/* profile... */}
      {tab === "profile" && <DashProfile />}
      {/* user Pststs  */}
      {tab === "posts" && <DashPosts />}

      {/* alll user show */}
      {tab === "users" && <DashUser />}
      {/* all coments */}
      {tab === "comments" && <DashComments />}
      {/* all post user post views ... see and observation place */}
      {tab === "dash" && <DashboardComp />}
    </div>
  );
}
