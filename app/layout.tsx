import type { Metadata } from "next";
import "./globals.css";
// import { Inter } from "next/font/google";

// const inter = Inter({
//   variable: "--font-inter",
//   subsets: ["latin"],
//   display: "swap",
//   axes: ["opsz"],
// });

export const metadata: Metadata = {
  title: "BotWot ICX",
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
      <body>{children}</body>
    </html>
  );
}
