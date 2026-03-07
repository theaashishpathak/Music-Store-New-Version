export const SkeletonCard = () => (
  <div className="skeleton-card">
    <div className="skeleton-img" />
    <div className="skeleton-body">
      <div className="skeleton-line short" />
      <div className="skeleton-line long" />
      <div
        className="skeleton-line"
        style={{ width: "100%", height: 30, borderRadius: 6 }}
      />
    </div>
  </div>
);
