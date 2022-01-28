module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      "klondike-digital-assets.imgix.net",
      "greatwall-sandbox-sandbox-image.imgix.net",
      "cdn.lazurde.com",
    ],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};
