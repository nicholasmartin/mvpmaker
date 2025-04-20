"use client";

import { useSidebar } from "@/context/SidebarContext";
import AppHeader from "@/components/dashboard-layout/AppHeader";
import React from "react";
import { User } from "@supabase/supabase-js";
import { Profile } from "@/utils/supabase/profiles";

export default function DashboardContent({ 
  children, 
  user,
  profile
}: { 
  children: React.ReactNode;
  user: User;
  profile: Profile | null;
}) {
  const { isExpanded, isHovered, isMobileOpen } = useSidebar();

  // Dynamic class for main content margin based on sidebar state
  const mainContentMargin = isMobileOpen
    ? "ml-0"
    : isExpanded || isHovered
    ? "lg:ml-[290px]"
    : "lg:ml-[90px]";

  return (
    <div
      className={`flex-1 transition-all duration-300 ease-in-out ${mainContentMargin}`}
    >
      {/* Header */}
      <AppHeader user={user} profile={profile} />
      {/* Page Content */}
      <div className="p-4 mx-auto max-w-[1400px] md:p-6">{children}</div>
    </div>
  );
}
