/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    reactStrictMode: true,
    images: {
        domains: ["static.vecteezy.com", 'upload.wikimedia.org']
    },
    experimental: {
        appDir: true
    }
}
