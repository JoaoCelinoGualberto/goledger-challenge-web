import React, { useState, useEffect } from "react";
import assetService from "../services/assetService.ts";
import { Playlist } from "../types/playlist.ts";
import "./PageStyles.css";
import GenericForm from "../components/GenericForm.tsx";
import { FaList } from "react-icons/fa";

const PlaylistPage: React.FC = () => {
  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchPlaylists = async () => {
    setLoading(true);
    try {
      const response = await assetService.search({ "@assetType": "playlist" });
      setPlaylists(response.data.result);
    } catch (error) {
      console.error("Failed to fetch playlists", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlaylists();
  }, []);

  return (
    <div className="page-container">
      <h1>Playlists</h1>
      <GenericForm refreshList={fetchPlaylists} assetType="playlist" />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid-container">
          {playlists.map((playlist) => (
            <div key={playlist.id} className="grid-item">
              <FaList />
              <h2>{playlist.name}</h2>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PlaylistPage;
