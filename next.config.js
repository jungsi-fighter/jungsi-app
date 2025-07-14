const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,   
  // 외부 이미지 도메인 설정 및 정적 export 모드에서 unoptimized로 처리
  images: {
    unoptimized: true,
    domains: [
      'i.ytimg.com',
      'img.youtube.com',
      'yt3.ggpht.com'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
        port: '',
        pathname: '/vi/**'
      },
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
        port: '',
        pathname: '/vi/**'
      },
      {
        protocol: 'https',
        hostname: 'yt3.ggpht.com',
        port: '',
        pathname: '/**'
      }
    ]
  },
  // 개발 중 HMR을 위한 허용 도메인
  allowedDevOrigins: [
    'https://8080-cs-443052881276-default.cs-asia-east1-cats.cloudshell.dev'
  ],
};

module.exports = nextConfig;
