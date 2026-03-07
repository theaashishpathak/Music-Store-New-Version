import { useNavigate } from "react-router-dom";

export const Song = ({ song, isFav, onFav }) => {
  const navigate = useNavigate();

  const goToPlayer = () => navigate("/player", { state: { song } });

  return (
    <div className="card">
      {/* Album art + hover overlay */}
      <div className="card-img-wrap">
        <img
          src={song.artworkUrl100}
          alt={`${song.trackName} by ${song.artistName}`}
        />
        <div className="card-overlay">
          <button className="overlay-play-btn" onClick={goToPlayer}>
            ▶
          </button>
        </div>
      </div>

      {/* Text info */}
      <div className="card-body">
        <p className="card-artist">{song.artistName}</p>
        <p className="card-title">{song.trackName}</p>

        {/* Actions row */}
        <div className="card-actions">
          <button className="card-play-btn" onClick={goToPlayer}>
            ▶ Play
          </button>
          <button
            className={`fav-btn ${isFav(song.trackId) ? "active" : ""}`}
            onClick={(e) => {
              e.stopPropagation();
              onFav(song);
            }}
            title={
              isFav(song.trackId)
                ? "Remove from favourites"
                : "Add to favourites"
            }
          >
            {isFav(song.trackId) ? "♥" : "♡"}
          </button>
        </div>
      </div>
    </div>
  );
};
