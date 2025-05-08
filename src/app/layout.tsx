import "@/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";

import { TRPCReactProvider } from "@/trpc/react";

import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";


export const metadata: Metadata = {
  title: "Pope Leo XIV - Tribute", // Updated title
  description: "A tribute website for His Holiness Pope Leo XIV (Robert Francis Prevost)", // Updated description
  icons: [{ rel: "icon", url: "/favicon.ico" }], // Keep favicon or update if needed
};
const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
