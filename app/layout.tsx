import { Inter } from "next/font/google";
import { SidebarProvider } from "@/context/SidebarContext";
import "./globals.css";

export const metadata = {
  title: "TailAdmin Dashboard - Next.js and Supabase",
  description: "Modern dashboard built with Next.js, Supabase, and TailAdmin",
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="font-inter">
        <SidebarProvider>
          {children}
        </SidebarProvider>
      </body>
    </html>
  );
}
