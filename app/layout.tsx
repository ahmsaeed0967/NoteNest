import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { teamMembers } from "@/data/team";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Default title and description (each page also sets its own).
export const metadata: Metadata = {
  title: "NoteNest",
  description: "A simple notes app built with Next.js for CS4032 Assignment 3.",
};

// The root layout wraps every page, so the Navbar and Footer appear everywhere.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-blue-50 text-slate-800">
        <Navbar appName="📝 NoteNest" />
        <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:py-10">{children}</main>
        <Footer members={teamMembers} />
      </body>
    </html>
  );
}
