'use client';

import { useState } from 'react';

// Компонент для встраивания YouTube видео
function YouTubeVideo({ videoId, title }: { videoId: string; title: string }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="aspect-video w-full">
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="p-3 sm:p-4">
        <h3 className="text-base sm:text-lg font-semibold text-gray-800">{title}</h3>
      </div>
    </div>
  );
}

export default function Videos() {
  // Здесь можно добавить ID видео с вашего YouTube канала
  // Чтобы получить ID видео, возьмите его из URL: youtube.com/watch?v=VIDEO_ID
  const [videos] = useState([
    {
      id: 'dQw4w9WgXcQ', // Пример ID - замените на реальные ID ваших видео
      title: 'Пример видео 1',
    },
    {
      id: 'dQw4w9WgXcQ', // Пример ID - замените на реальные ID ваших видео
      title: 'Пример видео 2',
    },
    {
      id: 'dQw4w9WgXcQ', // Пример ID - замените на реальные ID ваших видео
      title: 'Пример видео 3',
    },
  ]);

  return (
    <div className="min-h-screen bg-linear-to-b from-blue-50 to-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 text-center">
          Видео с канала
        </h1>
        <p className="text-center text-sm sm:text-base text-gray-600 mb-8 sm:mb-12 px-4">
          Полезные видео об остеопатии, лечении и здоровье
        </p>

        {videos.length === 0 ? (
          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 text-center">
            <p className="text-sm sm:text-base text-gray-600">
              Видео будут добавлены в ближайшее время
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {videos.map((video, index) => (
              <YouTubeVideo
                key={index}
                videoId={video.id}
                title={video.title}
              />
            ))}
          </div>
        )}

        <div className="mt-8 sm:mt-12 bg-blue-50 rounded-lg p-6 sm:p-8 text-center">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">
            Подписывайтесь на канал
          </h2>
          <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6">
            Больше полезных видео на моем YouTube канале
          </p>
          <a
            href="https://www.youtube.com/@yourchannel"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red-600 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg hover:bg-red-700 transition-colors duration-200 text-sm sm:text-base"
          >
            Перейти на YouTube канал
          </a>
        </div>
      </div>
    </div>
  );
}

