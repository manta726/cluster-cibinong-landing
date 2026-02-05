/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // ⬅️ TAMBAHKAN INI!
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: true,  // ⬅️ Recommended untuk Firebase Hosting
}

export default nextConfig
