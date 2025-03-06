import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/portfolio",
  output: "export",  // <=== enables static exports
  assetPrefix: "/portfolio",
  reactStrictMode: true,
};

export default nextConfig;
