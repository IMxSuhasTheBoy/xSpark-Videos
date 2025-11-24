/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["lh3.googleusercontent.com", "res.cloudinary.com"],
  }, // to allow OAuth to redirect users as they are signed in
};

export default nextConfig;
