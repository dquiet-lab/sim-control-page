import type { Metadata } from "next";
import { Varela_Round } from "next/font/google";
import "./globals.css";

import Header from "./Header";

const inter = Varela_Round({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sim Control Manager - Home",
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
      </body>
    </html>
  );
}
