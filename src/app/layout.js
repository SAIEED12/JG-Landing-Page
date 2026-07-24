import { Noto_Serif_Bengali, Noto_Sans_Bengali } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const notoSerifBengali = Noto_Serif_Bengali({
  subsets: ["bengali", "latin"],
  weight: ["500", "600", "700"],
  variable: "--font-serif-bengali",
  display: "swap",
});

const notoSansBengali = Noto_Sans_Bengali({
  subsets: ["bengali", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans-bengali",
  display: "swap",
});

export const metadata = {
  title: "তাহদীথ শপ | Tahdith Shop",
  description: "The Organic Way of Life",
  icons:{
    icon: "/logo.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn" className={`${notoSerifBengali.variable} ${notoSansBengali.variable}`}>
      <body className="font-sans min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}