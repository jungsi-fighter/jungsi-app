'use client';

interface ProgressBarProps {
  current: number;
  total: number;
}

export default function ProgressBar({ current, total }: ProgressBarProps) {
  const percent = (current / total) * 100;
  return (
    <div className="w-full h-2 bg-indigo-300 rounded-full mt-2 overflow-hidden">
      <div
        className="h-full bg-white rounded-full"
        style={{ width: `${percent}%` }}
      />
    </div>
  );
}
