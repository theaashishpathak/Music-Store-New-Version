import { useState, useEffect } from "react";

export const useFavorites = () => {
  const [favorites, setFavorites] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("mstore-favs") || "[]");
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("mstore-favs", JSON.stringify(favorites));
  }, [favorites]);

  const toggle = (song) => {
    setFavorites((prev) =>
      prev.find((f) => f.trackId === song.trackId)
        ? prev.filter((f) => f.trackId !== song.trackId)
        : [...prev, song]
    );
  };

  const isFav = (trackId) => favorites.some((f) => f.trackId === trackId);

  return { favorites, toggle, isFav };
};
