import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar/Navbar";
import "./globals.css";
import { Lato } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

const lato = Lato({
  subsets: ["latin"], // Specify the subset if you need
  weight: ["400", "700"], // Specify the font weights you want to include
  style: ["normal", "italic"], // Optional: Specify styles
  variable: "--font-lato", // Optional: Custom CSS variable to use in your styles
});

export const metadata: Metadata = {
  title: "Practo | Video Consultation with doctors, Book doctor appointments",
  description: "Your health in your hands",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
