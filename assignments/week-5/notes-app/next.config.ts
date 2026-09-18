import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

// Source - https://stackoverflow.com/a/68189283
// Posted by Dijalma Silva, modified by community. See post 'Timeline' for change history
// Retrieved 2026-09-18, License - CC BY-SA 4.0

module.exports = {
  reactStrictMode: true,
  allowedDevOrigins: ['192.168.1.164'],
  env: {
    SERVER_BASE_URL: process.env.SERVER_BASE_URL,
  }
}

export default nextConfig;
