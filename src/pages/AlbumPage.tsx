import React, { useState, useEffect } from "react";
import assetService from "../services/assetService.ts";
import { Album } from "../types/album.ts";
import "./PageStyles.css";
import GenericForm from "../components/GenericForm.tsx";
import { FaCompactDisc } from "react-icons/fa";

const AlbumPage: React.FC = () => {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchAlbums = async () => {
    setLoading(true);
    try {
      const response = await assetService.search({ "@assetType": "album" });
      setAlbums(response.data.result);
    } catch (error) {
      console.error("Failed to fetch albums", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAlbums();
  }, []);

  return (
    <div className="page-container">
      <h1>Albums</h1>
      <GenericForm refreshList={fetchAlbums} assetType="album" />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid-container">
          {albums.map((album) => (
            <div key={album.id} className="grid-item">
              <FaCompactDisc />
              <h2>{album.name}</h2>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AlbumPage;
