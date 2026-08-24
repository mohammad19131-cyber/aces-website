import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  async redirects() {
    return [
      { source: "/l.html", destination: "/study-guide", permanent: true },
      { source: "/abr.html", destination: "/abr", permanent: true },
      { source: "/code-conduct.html", destination: "/code-of-conduct", permanent: true },
      { source: "/incubation.html", destination: "/incubation", permanent: true },
      { source: "/inter-house.html", destination: "/inter-house", permanent: true },
    ];
  },
};

export default nextConfig;
