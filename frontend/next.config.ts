import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // WebP only — AVIF encode is heavier on cold starts (Netlify/serverless).
    formats: ["image/webp"],
    // Drop 2048/3840: hero sources are ~1500–1920px; larger sizes only upscale.
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
};

export default nextConfig;
