/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  nextConfig,
  // next.config.js
  // Other configurations...
  auth: {
    // other settings...
    privateRoutes: ['/shop/:id', '/pc-builder'],
  }

}
