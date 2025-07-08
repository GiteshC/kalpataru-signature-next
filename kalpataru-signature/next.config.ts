import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {},
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ixdtm.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
