/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/api/products/:productId',
                destination: 'https://api.timbu.cloud/products/:productId', // Proxy to the API
            },
        ];
    },

}

module.exports = nextConfig
