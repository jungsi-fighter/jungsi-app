const nextConfig = {
    reactStrictMode: true,
    // Next.js 14+ swcMinify and devIndicators options removed; default minification applies
    // Cross-origin HMR을 위해 allowedDevOrigins만 설정
    allowedDevOrigins: [
      'https://8080-cs-443052881276-default.cs-asia-east1-cats.cloudshell.dev'
    ],
  };
  module.exports = nextConfig;