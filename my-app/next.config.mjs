// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // This ensures the site is built for static export
    trailingSlash: true, // Optional: Adds trailing slashes to URLs
    images: {
      unoptimized: true, // Disable Next.js's image optimization for static exports
    },
  };
  
  export default nextConfig;
  
  