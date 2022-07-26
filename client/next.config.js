/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env:{
    NEXT_APP_PUBLIC_FOLDER: "https://daddesignsweb.com/images/"
  },
  images: {
    domains: ['daddesignsweb.com'],
  },
}

module.exports = nextConfig
