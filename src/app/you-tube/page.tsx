export const dynamic = 'force-dynamic';

import React from 'react';
import YouTubeGridClient from '../../components/you-tube/YouTubeGridClient';

interface VideoItem {
  id: { videoId: string };
  snippet: {
    title: string;
    description: string;
    publishedAt: string;
    thumbnails: { [key: string]: { url: string } };
  };
}

export default async function YouTubePage() {
  const apiKey = process.env.YOUTUBE_API_KEY;
  const channelId = process.env.YOUTUBE_CHANNEL_ID;
  if (!apiKey || !channelId) {
    return <p>Error: Missing API key or Channel ID.</p>;
  }
  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet&order=date&maxResults=50`,
    { cache: 'no-store' }
  );
  const data = await res.json();
  const videos: VideoItem[] = data.items;

  return (
    <div className="youtube-grid-container">
      <YouTubeGridClient videos={videos} />
    </div>
  );
}
