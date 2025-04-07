import "./globals.css";
import Footer from "./sections/Footer";
import Navbar from "./sections/Navbar";
import GetStartedSection from "./sections/GetStartedSection";
import { Poppins } from "next/font/google";
import Script from "next/script";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="description"
          content="BotWot’s ICX platform leverages proprietary AI to predict, adapt, and respond."
        />

        {/* Keep your existing scripts */}
        <Script id="clarity-script" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "oi04qe04w6");`}
        </Script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Z2ZBZZN0Y0"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Z2ZBZZN0Y0');
            gtag('config', 'AW-16484085944');
          `}
        </Script>
      </head>
      <body className={poppins.className}>
        <Navbar />
        <main>{children}</main>
        <GetStartedSection />
        <Footer />
      </body>
    </html>
  );
}
