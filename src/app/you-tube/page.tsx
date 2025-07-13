export const dynamic = 'force-dynamic';

import React from 'react';
import Layout from '../../components/Layout';
import YouTubeGridClientWrapper from '../../components/you-tube/YouTubeGridClientWrapper.client';

interface VideoItem {
  id: { videoId: string };
  snippet: {
    title: string;
    description?: string;
    publishedAt?: string;
    thumbnails: { [key: string]: { url: string } };
  };
}

export default async function YouTubePage() {
  const apiKey = process.env.YOUTUBE_API_KEY;
  const channelId = process.env.YOUTUBE_CHANNEL_ID;

  if (!apiKey || !channelId) {
    return (
      <Layout>
        <p className="text-center text-red-500 mt-8">오류: API 키 또는 채널 ID가 설정되지 않았습니다.</p>
      </Layout>
    );
  }

  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet&order=date&maxResults=50`,
    { cache: 'no-store' }
  );
  const data = await res.json();
  const initialItems: VideoItem[] = data.items || [];

  return (
    <Layout>
      <section id="you-tube" className="py-12 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-8">유튜브 영상 목록</h2>
        <YouTubeGridClientWrapper initialItems={initialItems} />
      </section>
    </Layout>
  );
}
