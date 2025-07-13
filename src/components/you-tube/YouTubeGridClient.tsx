'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface VideoItem {
  id: { videoId: string };
  snippet: {
    title: string;
    description?: string;
    publishedAt?: string;
    thumbnails: { [key: string]: { url: string } };
  };
  statistics?: {
    viewCount?: number;
    likeCount?: number;
  };
}

interface YouTubeGridClientProps {
  initialItems: VideoItem[];
}

const playlists = [
  { id: '전체', label: '전체' },
  { id: 'PLs14ujgw-QQPNWh4IN28gA8T3pzzjpM6d', label: '입시정보 전달' },
  { id: 'PLs14ujgw-QQPNjr2HzzOBOVGilmUfNess', label: '수능 전일학원' },
  { id: 'PLs14ujgw-QQOKQZuOnYRM1IkwBLMgVfuo', label: '학생 맞춤 고민상담' },
  { id: 'PLs14ujgw-QQOmVHHcnUlT_puJQ_mmYl7B', label: '재수종합반 강의' },
  { id: 'PLs14ujgw-QQPynsauIzb6nGZXLJ_8nczQ', label: '전일권 대표' },
];

export default function YouTubeGridClient({ initialItems }: YouTubeGridClientProps) {
  const [selected, setSelected] = useState(playlists[0].id);
  const [videos, setVideos] = useState<VideoItem[]>(initialItems);
  const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

  useEffect(() => {
    async function fetchList() {
      let items: VideoItem[] = [];
      if (selected === '전체') {
        items = initialItems;
      } else {
        const resp = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?key=${apiKey}&playlistId=${selected}&part=snippet&maxResults=50`,
          { cache: 'no-store' }
        );
        const data = await resp.json();
        items = data.items.map((i: any) => ({
          id: { videoId: i.snippet.resourceId.videoId },
          snippet: {
            title: i.snippet.title,
            thumbnails: { high: { url: i.snippet.thumbnails.high.url } },
            description: i.snippet.description,
            publishedAt: i.snippet.publishedAt,
          },
        }));
      }
      const ids = items.map(i => i.id.videoId).join(',');
      const statsRes = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?key=${apiKey}&id=${ids}&part=statistics`,
        { cache: 'no-store' }
      );
      const statsData = await statsRes.json();
      const statsMap = statsData.items.reduce((acc: any, cur: any) => {
        acc[cur.id] = cur.statistics;
        return acc;
      }, {});
      const enriched = items.map(i => ({
        ...i,
        statistics: statsMap[i.id.videoId] || {}
      }));
      setVideos(enriched);
    }
    fetchList().catch(console.error);
  }, [selected, apiKey, initialItems]);

  return (
    <>
      {/* 카테고리 버튼 그룹 (flex-wrap으로 줄 바꿈) */}
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-3 py-3 mb-6">
          {playlists.map(pl => (
            <button
              key={pl.id}
              className={
                `px-4 py-2 rounded-lg transition-colors ${
                  selected === pl.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`
              }
              onClick={() => setSelected(pl.id)}
            >
              {pl.label}
            </button>
          ))}
        </div>
      </div>

      {/* 비디오 그리드 */}
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {videos.map(item => (
          <Link
            key={item.id.videoId}
            href={`https://www.youtube.com/watch?v=${item.id.videoId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-transform hover:scale-105"
          >
            <div className="relative w-full aspect-video bg-gray-200">
              <Image
                src={item.snippet.thumbnails.high.url}
                alt={item.snippet.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2 line-clamp-2">{item.snippet.title}</h3>
              <p className="text-sm text-gray-600 mb-2 line-clamp-3 whitespace-pre-line">
                {item.snippet.description}
              </p>
              <div className="text-xs text-gray-500">
                {item.snippet.publishedAt && new Date(item.snippet.publishedAt).toLocaleDateString('ko-KR')} • 조회수{' '}
                {item.statistics?.viewCount?.toLocaleString()}회
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
