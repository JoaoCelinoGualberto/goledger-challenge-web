import React, { useState, useEffect } from "react";
import assetService from "../services/assetService.ts";
import { Song } from "../types/song.ts";
import "./PageStyles.css";
import GenericForm from "../components/GenericForm.tsx";
import { FaMusic } from "react-icons/fa";

const SongPage: React.FC = () => {
  const [songs, setSongs] = useState<Song[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchSongs = async () => {
    setLoading(true);
    try {
      const response = await assetService.search({ "@assetType": "song" });
      setSongs(response.data.result);
    } catch (error) {
      console.error("Failed to fetch songs", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSongs();
  }, []);

  return (
    <div className="page-container">
      <h1>Songs</h1>
      <GenericForm refreshList={fetchSongs} assetType="song" />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid-container">
          {songs.map((song) => (
            <div key={song.id} className="grid-item">
              <FaMusic />

              <h2>{song.name}</h2>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SongPage;
