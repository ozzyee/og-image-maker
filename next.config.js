/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    async redirects(){
        return [
            {
                source: '/og-img',
                destination: '/api/og-img',
                permanent: true,
            },
        ];
    },
}

module.exports = nextConfig
