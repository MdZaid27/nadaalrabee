const nextConfig = {
  poweredByHeader: false,
  compress: true,
  productionBrowserSourceMaps: false,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
    minimumCacheTTL: 604800,
  },
  async headers() {
    return [
      {
        source: "/:all*(jpg|jpeg|png|gif|svg|webp|avif)",
        headers: [
          { key: "Cache-Control", value: "public, immutable, max-age=31536000" },
        ],
      },
    ];
  },
};

export default nextConfig;