import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { ReactNode } from "react";
import Navbar from "@/components/Navbar";

const rem = localFont({
  src: [
    { path: "./fonts/REM-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/REM-Medium.ttf", weight: "500", style: "normal" },
    { path: "./fonts/REM-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "./fonts/REM-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-rem",
});

export const metadata: Metadata = {
  title: "Luis Martinez Portfolio",
  description: "Hi I'm Luis! :D",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en" className="h-full">
      <body className={`${rem.variable}  antialiased min-h-full`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
