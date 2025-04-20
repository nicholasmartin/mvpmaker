import React from "react";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-screen">
      {/* Left Side - Form */}
      <div className="flex w-full items-center justify-center bg-white p-4 dark:bg-gray-900 lg:w-1/2">
        {children}
      </div>
      
      {/* Right Side - Brand */}
      <div className="hidden w-1/2 flex-col bg-[#0F172A] p-16 text-white lg:flex">
        <div className="flex h-full w-full items-center justify-center">
          <div className="text-center">
            <h2 className="mb-5 text-[34px] font-semibold leading-[44px] text-white">
              SaaS Starter Kit
            </h2>
            <p className="mx-auto max-w-[410px] text-base font-medium leading-[24px] text-white opacity-60">
              Build your SaaS application with this modern dashboard template powered by Next.js and Supabase.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
