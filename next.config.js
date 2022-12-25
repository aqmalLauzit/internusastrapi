/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost','shocking-zombie-20427.herokuapp.com','mba.cerdasberamal.com'],
  },
}

module.exports = nextConfig
