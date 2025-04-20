"use client";

import React from "react";
import AppSidebar from "@/components/dashboard-layout/AppSidebar";
import Backdrop from "@/components/dashboard-layout/Backdrop";
import DashboardContent from "@/components/dashboard-layout/DashboardContent";
import { ThemeProvider } from "@/context/ThemeContext";
import { User } from "@supabase/supabase-js";
import { Profile } from "@/utils/supabase/profiles";

export default function DashboardShell({
  children,
  user,
  profile,
}: {
  children: React.ReactNode;
  user: User;
  profile: Profile | null;
}) {
  return (
    <ThemeProvider>
      <div className="min-h-screen xl:flex">
        {/* Sidebar and Backdrop */}
        <AppSidebar />
        <Backdrop />
        
        {/* Main Content Area */}
        <DashboardContent user={user} profile={profile}>{children}</DashboardContent>
      </div>
    </ThemeProvider>
  );
}
