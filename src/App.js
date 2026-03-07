import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { SearchPage } from "./pages/SearchPage.jsx";
import { PlayerPage } from "./pages/PlayerPage.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/search" />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/player" element={<PlayerPage />} />
    </Routes>
  );
}

export default App;
