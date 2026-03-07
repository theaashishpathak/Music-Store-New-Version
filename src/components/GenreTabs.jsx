const GENRES = [
  { label: "🔥 Latest", term: "Latest Songs" },
  { label: "🎤 Pop", term: "Pop" },
  { label: "🎸 Rock", term: "Rock" },
  { label: "🎧 Hip-Hop", term: "Hip Hop" },
  { label: "🎷 Jazz", term: "Jazz" },
  { label: "🥁 Electronic", term: "Electronic" },
  { label: "🌶️ Bollywood", term: "Bollywood" },
  { label: "🎻 Classical", term: "Classical" },
  { label: "💔 R&B", term: "R&B" }
];

export const GenreTabs = ({ activeGenre, onSelect }) => (
  <div className="genre-tabs">
    {GENRES.map((g) => (
      <button
        key={g.term}
        className={`genre-tab ${activeGenre === g.term ? "active" : ""}`}
        onClick={() => onSelect(g.term)}
      >
        {g.label}
      </button>
    ))}
  </div>
);
