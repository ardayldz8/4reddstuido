import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Performance & Security */
  poweredByHeader: false,
  compress: true,

  /* Image Optimization */
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },

  /* Security Headers */
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
      {
        source: "/tour/tiles/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/brand/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=2592000" },
        ],
      },
    ];
  },
};

export default nextConfig;
