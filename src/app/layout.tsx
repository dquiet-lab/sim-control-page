import type { Metadata } from "next";
import { Varela_Round } from "next/font/google";
import "./globals.css";

import Header from "./Header";
import Footer from "./Footer";

const inter = Varela_Round({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sim Control Hub",
  description: "A mod for The Sims 4",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
