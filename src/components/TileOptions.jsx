import React, { useState } from "react";


export default function TileOptions({
  tileSize,
  setTileSize,
  customSize,
  setCustomSize,
  handleSlice,
}) {
  return (
    <div className="options-panel pixel-panel">
<h2 className="gba-title">Tile Settings</h2>

      <div className="options-row">
        <label>Tile size:</label>
        <select
          value={tileSize}
          onChange={(e) => setTileSize(e.target.value)}
        >
          <option value={16}>16×16</option>
          <option value={32}>32×32</option>
          <option value={"custom"}>Custom</option>
        </select>
      </div>

      {tileSize === "custom" && (
        <div className="options-row">
          <label>Custom size:</label>
          <input
            type="number"
            value={customSize}
            min={4}
            max={256}
            onChange={(e) => setCustomSize(Number(e.target.value))}
          />
        </div>
      )}

      <button className="btn-slice pixel-button" onClick={handleSlice}>
         Slice Tileset
      </button>
    </div>
  );
}
