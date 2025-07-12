'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function YouTubeGridClient({ initialItems }) {
  const playlists = [
    { id: '전체', label: '전체' },
    { id: 'PLs14ujgw-QQPNWh4IN28gA8T3pzzjpM6d', label: '입시정보 전달' },
    { id: 'PLs14ujgw-QQPTjAObwq4v6GYVuNNQfOhu', label: '생기부를 부탁해' },
    { id: 'PLs14ujgw-QQPynsauIzb6nGZXLJ_8nczQ', label: '전일권 대표' },
  ];

  const [selected, setSelected] = useState('전체');
  const [videos, setVideos] = useState(initialItems);
  const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

  useEffect(() => {
    async function fetchList() {
      let items = [];
      if (selected === '전체') {
        items = initialItems;
      } else {
        const resp = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?key=${apiKey}&playlistId=${selected}&part=snippet&maxResults=50`,
          { cache: 'no-store' }
        );
        if (!resp.ok) throw new Error('PlaylistItems 호출 실패');
        const data = await resp.json();
        items = data.items
          .filter(i => i.snippet.resourceId?.videoId)
          .map(i => ({
            id: { videoId: i.snippet.resourceId.videoId },
            snippet: {
              title: i.snippet.title,
              thumbnails: { high: { url: i.snippet.thumbnails.high.url } },
            },
          }));
      }

      if (!items.length) {
        setVideos([]);
        return;
      }

      const ids = items.map(i => i.id.videoId).join(',');
      const statRes = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?key=${apiKey}&id=${ids}&part=snippet,statistics`,
        { cache: 'no-store' }
      );
      if (!statRes.ok) throw new Error('Statistics 호출 실패');
      const statData = await statRes.json();
      const map = statData.items.reduce((acc, v) => {
        acc[v.id] = v;
        return acc;
      }, {});

      const enriched = items.map(it => {
        const info = map[it.id.videoId] || {};
        return {
          ...it,
          snippet: {
            ...it.snippet,
            publishedAt: info.snippet?.publishedAt,
            viewCount: info.statistics?.viewCount,
            likeCount: info.statistics?.likeCount,
          },
        };
      });
      setVideos(enriched);
    }
    fetchList().catch(console.error);
  }, [selected, apiKey, initialItems]);

  return (
    <>
      <div className="flex flex-wrap gap-2 mb-6">
        {playlists.map(pl => (
          <button
            key={pl.id}
            className={`px-4 py-2 rounded ${selected === pl.id ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => setSelected(pl.id)}
          >
            {pl.label}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {videos.map(item => (
          <Link key={item.id.videoId} href={`https://youtube.com/watch?v=${item.id.videoId}`} target="_blank">
            <div className="rounded-lg overflow-hidden shadow hover:shadow-lg transition-transform hover:scale-105">
              <Image
                src={item.snippet.thumbnails.high.url}
                width={320}
                height={180}
                alt={item.snippet.title}
                className="w-full object-cover"
              />
              <div className="p-2">
                <p className="text-sm font-medium leading-snug truncate">{item.snippet.title}</p>
                {item.snippet.viewCount && (
                  <p className="mt-1 text-xs text-gray-500">
                    조회수 {Number(item.snippet.viewCount).toLocaleString()}회{item.snippet.likeCount && ` · 좋아요 ${Number(item.snippet.likeCount).toLocaleString()}개`} ·{' '}
                    {item.snippet.publishedAt &&
                      new Date(item.snippet.publishedAt).toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </p>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
