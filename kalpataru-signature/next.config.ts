import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {},
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ixdtm.com",
        pathname: "/projects/kalpataru-signature-wp/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
