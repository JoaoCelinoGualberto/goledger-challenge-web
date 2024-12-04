import React, { useState } from "react";
import assetService from "../services/assetService.ts";
import "./GenericForm.css"; // Estilos CSS externos

interface GenericFormProps {
  refreshList: () => void;
  assetType: string;
}

const GenericForm: React.FC<GenericFormProps> = ({ refreshList, assetType }) => {
  const [name, setName] = useState<string>("");
  const [albumName, setAlbumName] = useState<string>("");
  const [artistName, setArtistName] = useState<string>("");
  const [year, setYear] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      let asset: any = {
        "@assetType": assetType,
        name,
      };

      if (assetType === "album") {
        asset.artist = {
          "@assetType": "artist",
          name: artistName,
        };
        asset.year = year;
      } else if (assetType === "song") {
        asset.album = {
          "@assetType": "album",
          name: albumName,
          artist: {
            "@assetType": "artist",
            name: artistName,
          },
        };
      } else {
        asset.country = "Brazil";
      }

      await assetService.create({ asset: [asset] });
      setName("");
      setAlbumName("");
      setArtistName("");
      setYear("");
      refreshList();
    } catch (error) {
      console.error(`Failed to create ${assetType}`, error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="input-row">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={`Add ${assetType} name`}
          required
        />
        {assetType === "album" && (
          <>
            <input
              type="text"
              value={artistName}
              onChange={(e) => setArtistName(e.target.value)}
              placeholder="Artist name"
              required
            />
            <input
              type="text"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              placeholder="Year"
              required
            />
          </>
        )}
        {assetType === "song" && (
          <>
            <input
              type="text"
              value={albumName}
              onChange={(e) => setAlbumName(e.target.value)}
              placeholder="Album name"
              required
            />
            <input
              type="text"
              value={artistName}
              onChange={(e) => setArtistName(e.target.value)}
              placeholder="Artist name"
              required
            />
          </>
        )}
      </div>
      <button type="submit">Add</button>
    </form>
  );
};

export default GenericForm;
