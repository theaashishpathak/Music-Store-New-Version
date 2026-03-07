import { useEffect, useState } from "react";
import { Search } from "../components/Search.jsx";
import { Songs } from "../components/Songs.jsx";
import { SkeletonCard } from "../components/SkeletonCard.jsx";
import { GenreTabs } from "../components/GenreTabs.jsx";
import { useSongs } from "../hooks/useSongs.js";
import { useFavorites } from "../hooks/useFavorites.js";

// Which tab is active in the top navbar
const VIEWS = { BROWSE: "browse", FAVOURITES: "favourites" };

export const SearchPage = () => {
  const { songs, loading, error, search, loadMore, hasMore } = useSongs();
  const { favorites, toggle, isFav } = useFavorites();

  const [view, setView] = useState(VIEWS.BROWSE);
  const [activeGenre, setActiveGenre] = useState("Latest Songs");
  const [searchTerm, setSearchTerm] = useState("");

  // Load default songs on mount
  useEffect(() => {
    search("Latest Songs");
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // When user picks a genre tab
  const handleGenreSelect = (term) => {
    setActiveGenre(term);
    setSearchTerm(""); // clear search box
    search(term);
    setView(VIEWS.BROWSE);
  };

  // When user types in search and hits Search button
  const handleSearch = (term) => {
    if (!term.trim()) return;
    setSearchTerm(term);
    setActiveGenre(""); // deselect genre tab
    search(term);
    setView(VIEWS.BROWSE);
  };

  // What songs to show depends on active view
  const displaySongs = view === VIEWS.FAVOURITES ? favorites : songs;

  const sectionLabel =
    view === VIEWS.FAVOURITES
      ? `Your Favourites (${favorites.length})`
      : searchTerm
        ? `Results for "${searchTerm}"`
        : activeGenre;

  return (
    <div className="app-wrapper">
      {/* ── NAVBAR ── */}
      <nav className="navbar">
        <div className="nav-logo">
          Music<span>Store</span>
        </div>

        <div className="nav-tabs">
          <button
            className={`nav-tab ${view === VIEWS.BROWSE ? "active" : ""}`}
            onClick={() => setView(VIEWS.BROWSE)}
          >
            🎵 Browse
          </button>
          <button
            className={`nav-tab ${view === VIEWS.FAVOURITES ? "active" : ""}`}
            onClick={() => setView(VIEWS.FAVOURITES)}
          >
            ♥ Favourites
            {favorites.length > 0 && (
              <span className="fav-count">{favorites.length}</span>
            )}
          </button>
        </div>
      </nav>

      {/* ── MAIN CONTENT ── */}
      <div className="container">
        {/* Only show hero + search + genre in Browse view */}
        {view === VIEWS.BROWSE && (
          <>
            <div className="hero">
              <h1 className="hero-title">Discover Music</h1>
              <p className="hero-sub">
                30-second previews from iTunes · Updated daily
              </p>
              <Search fn={handleSearch} />
            </div>

            <GenreTabs activeGenre={activeGenre} onSelect={handleGenreSelect} />
          </>
        )}

        {/* Favourites hero */}
        {view === VIEWS.FAVOURITES && (
          <div className="hero" style={{ paddingBottom: 8 }}>
            <h1 className="hero-title">Your Favourites</h1>
            <p className="hero-sub">Songs you've loved ♥</p>
          </div>
        )}

        {/* Section label */}
        <div className="section-label">{sectionLabel}</div>

        {/* Loading skeletons */}
        {loading && view === VIEWS.BROWSE && (
          <div className="song-grid">
            {Array.from({ length: 12 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        )}

        {/* Error state */}
        {error && (
          <div className="song-grid">
            <p className="error-msg">⚠️ {error}</p>
          </div>
        )}

        {/* Songs grid */}
        {(!loading || view === VIEWS.FAVOURITES) && !error && (
          <Songs
            allsongs={displaySongs}
            isFav={isFav}
            onFav={toggle}
            emptyMessage={
              view === VIEWS.FAVOURITES
                ? "You haven't favourited any songs yet. Browse and tap ♥ on a song!"
                : null
            }
          />
        )}

        {/* Load More */}
        {view === VIEWS.BROWSE && hasMore && !loading && (
          <div className="load-more-wrap">
            <button className="load-more-btn" onClick={loadMore}>
              Load More Songs
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
