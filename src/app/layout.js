const dns = require("node:dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

import { Noto_Serif_Bengali, Noto_Sans_Bengali } from "next/font/google";
import "./globals.css";
import { Toast } from "@heroui/react";
import LayoutShell from "@/components/LayoutShell";

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
  icons: {
    icon: "/logo.jpg",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="bn"
      className={`${notoSerifBengali.variable} ${notoSansBengali.variable}`}
    >
      <body className="font-sans min-h-full flex flex-col">
        <Toast.Provider />
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
