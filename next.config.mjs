/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export untuk Firebase Hosting
  output: "export",
  
  // Trailing slash untuk static hosting
  trailingSlash: true,
  
  // Ignore build errors
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Unoptimized images untuk static export
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
