import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // In development, Next.js only runs the page's JavaScript for "localhost".
  // These lines also allow 127.0.0.1 and local network addresses (192.168.x.x),
  // so buttons and forms work no matter which "npm run dev" link is opened.
  allowedDevOrigins: ["127.0.0.1", "192.168.*.*", "10.*.*.*"],
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
