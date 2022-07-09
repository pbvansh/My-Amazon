/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains: ['links.papareact.com','fakestoreapi.com']
  },
  future: { webpack5: true }
}

module.exports = nextConfig
