// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   output: "export",
//   images: {
//     unoptimized: true,
//   },
// };

// export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
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
                https://googleads.g.doubleclick.net
                https://www.google.com
                https://www.google-analytics.com
                https://messages-dump.s3.ap-south-1.amazonaws.com
                https://cdn.socket.io;
              style-src 'self' 'unsafe-inline'
                https://fonts.googleapis.com;
              font-src 'self'
                https://fonts.googleapis.com
                https://fonts.gstatic.com
                data:;
              img-src 'self' data:
  https://c.clarity.ms
  https://www.google.com
  https://www.google.co.in
  https://www.googletagmanager.com
  https://botwot-user-data-info.s3.ap-south-1.amazonaws.com
  https://cdn1.vectorstock.com;
              connect-src 'self'
                https://www.google-analytics.com
                https://google-analytics.com
                https://www.googletagmanager.com
                https://googleads.g.doubleclick.net
                https://www.google.com
                https://w.clarity.ms
                https://b.clarity.ms
                https://uatapi.botwot.io;
              frame-src
                https://td.doubleclick.net
                https://www.googletagmanager.com
                https://www.google.com;
            `
              .replace(/\s{2,}/g, " ")
              .trim(),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
