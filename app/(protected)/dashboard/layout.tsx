import { createClient } from "@/utils/supabase/server";
import { getUserProfile } from "@/utils/supabase/profiles";
import { redirect } from "next/navigation";
import React from "react";
import DashboardShell from "@/components/dashboard-layout/DashboardShell";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Check authentication
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/signin");
  }

  // Fetch user profile
  const profile = await getUserProfile(user);

  return <DashboardShell user={user} profile={profile}>{children}</DashboardShell>;
}
