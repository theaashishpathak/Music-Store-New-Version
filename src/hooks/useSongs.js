import { useState, useCallback, useRef } from "react";
import { getSongs } from "../services/api-client.js"; // ← .js extension required

const PAGE_SIZE = 20;

export const useSongs = () => {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const allResultsRef = useRef([]);

  const search = useCallback(async (term) => {
    setLoading(true);
    setError(null);
    setPage(1);
    try {
      const results = await getSongs(term);
      allResultsRef.current = results;
      setSongs(results.slice(0, PAGE_SIZE));
    } catch (err) {
      setError("Failed to load songs. Please try again.");
    } finally {
      setLoading(false);
    }
  }, []);

  const loadMore = () => {
    const next = page + 1;
    setSongs(allResultsRef.current.slice(0, next * PAGE_SIZE));
    setPage(next);
  };

  const hasMore = songs.length < allResultsRef.current.length;

  return { songs, loading, error, search, loadMore, hasMore };
};
