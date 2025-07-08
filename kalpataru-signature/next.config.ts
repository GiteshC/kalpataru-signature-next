import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {},
  images: {
    domains: ['ixdtm.com'],
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
