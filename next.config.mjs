/** @type {import('next').NextConfig} */
const nextConfig = {
  // ...twoje istniejące ustawienia...

  async headers() {
    return [
      {
        source: "/favicon.ico",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow, noimageindex",
          },
          {
            key: "Cache-Control",
            value: "public, max-age=86400, immutable",
          },
        ],
      },
      {
        source: "/_next/static/media/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow, noimageindex",
          },
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
