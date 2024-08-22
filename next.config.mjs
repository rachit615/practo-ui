/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "blog.practo.com",
        port: "",
        pathname: "/**", // Allow all paths from blog.practo.com
      },
      {
        protocol: "https",
        hostname: "accounts.practo.com",
        port: "",
        pathname: "/**", // Allow all paths from accounts.practo.com
      },
    ],
  },
};

export default nextConfig;
