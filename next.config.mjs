/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'export',
    trailingSlash: true,
    basePath: '/projet-integrateur',
    assetPrefix: '/projet-integrateur/',
    images: {
        unoptimized: true
    }
}

export default nextConfig 
