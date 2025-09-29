import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/coworking/Navbar";

import CoworkingFooter from "@/components/coworking/Footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "MY STYLIST",
  description: "MyStylist website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
       
        {children}
        <CoworkingFooter/>
      
      </body>
    </html>
  );
}
