import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "r2.or-gm.com",
      },
      {
        protocol: "https",
        hostname: "cdn.cloudflare.steamstatic.com",
      },
    ],
  },
};

export default nextConfig;
