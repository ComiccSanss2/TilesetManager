import React from "react";

export default function ZoomControls({ zoom, setZoom, showGrid, setShowGrid }) {
  const handleZoomChange = (e) => {
    setZoom(Number(e.target.value));
  };

  return (
    <div className="options-panel pixel-panel zoom-panel">
<h2 className="gba-title">View</h2>

      <div className="options-row">
        <label>Zoom</label>
        <input
          type="range"
          min="0.5"
          max="4"
          step="0.25"
          value={zoom}
          onChange={handleZoomChange}
        />
        <span className="zoom-value">{zoom.toFixed(2)}x</span>
      </div>

      <div className="options-row">
        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={showGrid}
            onChange={(e) => setShowGrid(e.target.checked)}
          />
          Show grid
        </label>
      </div>
    </div>
  );
}
