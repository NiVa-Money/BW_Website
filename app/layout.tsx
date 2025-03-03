import type { Metadata } from "next";
import "./globals.css";
import Footer from "./sections/Footer";
import Navbar from "./sections/Navbar";
import GetStartedSection from "./sections/GetStartedSection";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BotWot iCX",
  description:
    "BotWot’s ICX platform leverages proprietary AI to predict, adapt, and respond, transforming every customer interaction into a personalized journey",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        <main>{children}</main>
        <GetStartedSection />
        <Footer />
      </body>
    </html>
  );
}
