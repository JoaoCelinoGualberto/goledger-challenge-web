import React, { useState, useEffect } from "react";
import assetService from "../services/assetService.ts";
import GenericForm from "../components/GenericForm.tsx";
import { Artist } from "../types/artist";
import "./PageStyles.css";
import { FaUser } from "react-icons/fa";

const ArtistPage: React.FC = () => {
  const [artists, setArtists] = useState<Artist[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchArtists = async () => {
    setLoading(true);
    try {
      const response = await assetService.search({ "@assetType": "artist" });
      setArtists(response.data.result);
    } catch (error) {
      console.error("Failed to fetch artists", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArtists();
  }, []);

  return (
    <div className="page-container">
      <h1>Artists</h1>
      <GenericForm refreshList={fetchArtists} assetType="artist" />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid-container">

          {artists.map((artist) => (
            <div key={artist.id} className="grid-item">
              <FaUser />
              <h2>{artist.name}</h2>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ArtistPage;
