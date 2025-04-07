// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   output: "export",
//   images: {
//     unoptimized: true,
//   },
// };

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: "/(.*)", // applies to all routes
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
                https://www.google-analytics.com;
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
                https://www.googletagmanager.com;
              connect-src 'self'
                https://www.google-analytics.com
                https://google-analytics.com
                https://www.googletagmanager.com
                https://googleads.g.doubleclick.net
                https://www.google.com
                https://w.clarity.ms
                https://b.clarity.ms;
              frame-src
                https://td.doubleclick.net
                https://www.googletagmanager.com
                https://www.google.com;
            `.replace(/\s{2,}/g, " ").trim(),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
