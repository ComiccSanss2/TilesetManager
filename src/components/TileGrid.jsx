import React, { useState } from "react";


export default function TileGrid({ tiles }) {
  return (
    <div className="tile-grid">
      {tiles.map((t) => (
        <div className="tile-preview pixel-panel" key={t.id}>
          <img src={t.src} alt={`tile-${t.x}-${t.y}`} />
          <span className="coords">
            ({t.x}, {t.y})
          </span>
        </div>
      ))}
    </div>
  );
}
