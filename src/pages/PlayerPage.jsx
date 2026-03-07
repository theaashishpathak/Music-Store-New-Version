import { useLocation, useNavigate, Navigate } from "react-router-dom";
import { Player } from "../components/Player.jsx"; // ← .jsx extension required

export const PlayerPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  // If someone lands on /player directly with no song, send them back
  if (!state?.song) return <Navigate to="/search" />;

  return <Player song={state.song} onBack={() => navigate(-1)} />;
};
