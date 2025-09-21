// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'storage.yandexcloud.net',
				pathname: '/aldy-images/**',
			},
		],
	},

	devIndicators: false,
};

export default nextConfig;
