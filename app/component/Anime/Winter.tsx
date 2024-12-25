"use client";
import React, { useState, useEffect } from "react";


type AnimeCardProps = {
  mal_id: string;
  title: string;
  images: string;
  synopsis: string;
};

const AnimeCardWinter = () => {
  const [animeList, setAnimeList] = useState<AnimeCardProps[]>([]);

  useEffect(() => {
    fetch("https://api.jikan.moe/v4/seasons/2024/winter?sfw")
      .then((response) => response.json())
      .then((data) => setAnimeList(data.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="mt-10 px-4">
      <h1 className="text-4xl font-semibold text-center text-gray-800 mb-10">
        Winter 2016 Anime List
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {animeList.length > 0 ? (
          animeList.map((anime) => (
            <div
              key={anime.mal_id}
              className="anime-card bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transform hover:translate-y-2 transition-all duration-300"
            >
              <img
                src={anime.images.jpg.large_image_url}
                alt={anime.title}
                className="w-full h-64 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-medium text-gray-800 mb-3">{anime.title}</h3>
              <p className="text-gray-600 text-sm line-clamp-3">{anime.synopsis}</p>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center">
            <p className="text-xl text-gray-500">Loading...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AnimeCardWinter;
