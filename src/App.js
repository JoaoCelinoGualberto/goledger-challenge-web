import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ArtistPage from "./pages/ArtistPage.tsx";
import AlbumPage from "./pages/AlbumPage.tsx";
import SongPage from "./pages/SongPage.tsx";
import PlaylistPage from "./pages/PlaylistPage.tsx";
import "./App.css"; 

function App() {
  return (
    <Router>
      <div className="home">
        <header className="home-header">
          <h1>Welcome to the Music App</h1>
          <p>Explore your favorite Artists, Albums, Songs, and Playlists!</p>
        </header>
        <nav className="home-links">
          <Link to="/artists" className="link-item">Artists</Link>
          <Link to="/albums" className="link-item">Albums</Link>
          <Link to="/songs" className="link-item">Songs</Link>
          <Link to="/playlists" className="link-item">Playlists</Link>
        </nav>
      </div>
      <Routes>
        <Route path="/artists" element={<ArtistPage />} />
        <Route path="/albums" element={<AlbumPage />} />
        <Route path="/songs" element={<SongPage />} />
        <Route path="/playlists" element={<PlaylistPage />} />
      </Routes>
    </Router>
  );
}

export default App;
