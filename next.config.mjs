import bundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Tutaj są twoje inne konfiguracje Next.js
};

export default withBundleAnalyzer(nextConfig);
