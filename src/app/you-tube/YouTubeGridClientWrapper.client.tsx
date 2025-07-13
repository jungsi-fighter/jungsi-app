'use client';

import dynamic from 'next/dynamic';
import React from 'react';

interface YouTubeGridClientProps {
  initialItems: any[];
}

// 실제 YouTubeGridClient 컴포넌트를 동적으로 불러오는 클라이언트 전용 래퍼
const YouTubeGridClient = dynamic<YouTubeGridClientProps>(
  () => import('../../components/you-tube/YouTubeGridClient')),
  { ssr: false }
);

export default function YouTubeGridClientWrapper(props: YouTubeGridClientProps) {
  return <YouTubeGridClient {...props} />;
}
