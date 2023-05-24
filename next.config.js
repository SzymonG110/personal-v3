/** @type {import('next').NextConfig} */
const nextConfig = {
	sassOptions: {
		includePaths: [`${__dirname}/src/styles`, `${__dirname}/src/components`],
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'i.imgur.com',
				port: '',
				pathname: '**',
			},
		],
	},
}

module.exports = nextConfig
