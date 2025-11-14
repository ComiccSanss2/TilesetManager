import React, { useState, useEffect } from "react";
import Dropzone from "./components/Dropzone";
import TileOptions from "./components/TileOptions";
import TileGrid from "./components/TileGrid";
import "./styles.css";

export default function App() {
  const [image, setImage] = useState(null);
  const [tiles, setTiles] = useState([]);
  const [tileSize, setTileSize] = useState(16);
  const [customSize, setCustomSize] = useState(16);

  const handleSlice = () => {
    if (!image) return;

    const img = new Image();
    img.src = image;

    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      const size = tileSize === "custom" ? customSize : tileSize;

      const cols = Math.floor(img.width / size);
      const rows = Math.floor(img.height / size);

      const slicedTiles = [];

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          canvas.width = size;
          canvas.height = size;

          ctx.clearRect(0, 0, size, size);
          ctx.drawImage(
            img,
            x * size,
            y * size,
            size,
            size,
            0,
            0,
            size,
            size
          );

          const tileURL = canvas.toDataURL("image/png");

          slicedTiles.push({
            id: `${x}-${y}`,
            x,
            y,
            size,
            src: tileURL,
          });
        }
      }

      setTiles(slicedTiles);
    };
  };

  return (
    <div className="app">
      <h1 className="title">🎨 Tileset Manager</h1>

      <Dropzone setImage={setImage} />

      {image && (
        <TileOptions
          tileSize={tileSize}
          setTileSize={setTileSize}
          customSize={customSize}
          setCustomSize={setCustomSize}
          handleSlice={handleSlice}
        />
      )}

      {tiles.length > 0 && <TileGrid tiles={tiles} />}
    </div>
  );
}
