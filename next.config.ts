import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: false,
  images: {
    unoptimized: true,
    domains: ["botwot-user-data-info.s3.ap-south-1.amazonaws.com"],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: `
              default-src 'self';
              script-src 'self' 'unsafe-inline' 'unsafe-eval'
                https://www.googletagmanager.com
                https://www.clarity.ms
                https://www.google.com
                https://www.google-analytics.com
                https://messages-dump.s3.ap-south-1.amazonaws.com
                https://cdn.socket.io
                https://googleads.g.doubleclick.net
                https://www.google.co.in;
              style-src 'self' 'unsafe-inline'
                https://fonts.googleapis.com;
              font-src 'self'
                https://fonts.gstatic.com
                https://fonts.googleapis.com
                data:;
              img-src 'self' data:
                https://*.clarity.ms
                https://www.google.com
                https://www.googletagmanager.com
                https://botwot-user-data-info.s3.ap-south-1.amazonaws.com
                https://googleads.g.doubleclick.net
                https://www.google.co.in
                https://www.googleadservices.com;
              connect-src 'self'
                https://www.google-analytics.com
                https://www.googletagmanager.com
                https://*.clarity.ms
                https://uatapi.botwot.io
                wss://uatapi.botwot.io
                https://www.google.com
                https://googleads.g.doubleclick.net;
              frame-src
                https://td.doubleclick.net
                https://www.googletagmanager.com
                https://www.google.com
                https://googleads.g.doubleclick.net;
            `
              .replace(/\n/g, "")
              .replace(/\s{2,}/g, " ")
              .trim(),
          },
        ],
      },
    ];
  },
};
export default nextConfig;
