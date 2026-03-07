import { useRef, useState, useEffect } from "react";

export const Player = ({ fn, song, onBack }) => {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(30);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setPlaying(false);
    setProgress(0);
    setCurrent(0);
    setReady(false);
  }, [song]);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio || !ready) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      try {
        await audio.play();
        setPlaying(true);
      } catch (err) {
        if (err.name !== "AbortError")
          console.error("Playback error:", err.message);
      }
    }
  };

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (!audio) return;
    const dur = audio.duration || 30;
    setCurrent(audio.currentTime);
    setProgress((audio.currentTime / dur) * 100);
  };

  const handleSeek = (e) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = (e.target.value / 100) * (audio.duration || 30);
    setProgress(e.target.value);
  };

  const fmt = (s) =>
    `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`;

  const handleBack = () => {
    if (audioRef.current) audioRef.current.pause();
    if (onBack) onBack();
    else if (fn) fn(false, null);
  };

  return (
    <div className="player-page">
      {/* Blurred background from album art */}
      <div
        className="player-bg"
        style={{ backgroundImage: `url(${song.artworkUrl100})` }}
      />

      <button className="player-back-btn" onClick={handleBack}>
        ← Back to Songs
      </button>

      <div className="player-card">
        <img
          src={song.artworkUrl600 || song.artworkUrl100}
          alt={`${song.trackName} by ${song.artistName}`}
          className="player-artwork"
        />

        <div className="player-body">
          <p className="player-genre">{song.primaryGenreName}</p>
          <h2 className="player-track">{song.trackName}</h2>
          <p className="player-artist">{song.artistName}</p>

          <div className="progress-wrap">
            <span className="time-label">{fmt(current)}</span>
            <input
              type="range"
              min="0"
              max="100"
              value={progress}
              onChange={handleSeek}
              className="progress-bar"
              disabled={!ready}
            />
            <span className="time-label">{fmt(duration)}</span>
          </div>

          <button className="play-btn" onClick={togglePlay} disabled={!ready}>
            {!ready ? "Loading..." : playing ? "⏸ Pause" : "▶ Play Preview"}
          </button>

          <p className="preview-note">🎵 30-second iTunes preview</p>
        </div>
      </div>

      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={(e) => setDuration(e.target.duration)}
        onCanPlay={() => setReady(true)}
        onEnded={() => {
          setPlaying(false);
          setProgress(0);
          setCurrent(0);
        }}
        preload="auto"
      >
        <source src={song.previewUrl} type="audio/mp4" />
      </audio>
    </div>
  );
};
