import { Song } from "./Song.jsx";

export const Songs = ({ allsongs, isFav, onFav, emptyMessage }) => {
  // Empty state
  if (allsongs.length === 0) {
    return (
      <div className="song-grid">
        <div className="empty-state">
          <div className="empty-icon">♪</div>
          <p className="empty-title">No songs here yet</p>
          <p className="empty-sub">
            {emptyMessage || "Search for an artist or pick a genre above"}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="song-grid">
      {allsongs.map((song) => (
        <Song key={song.trackId} song={song} isFav={isFav} onFav={onFav} />
      ))}
    </div>
  );
};
