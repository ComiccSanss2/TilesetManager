import React, { useState } from "react";


export default function Dropzone({ setImage }) {
  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    handleFile(file);
  };

  const handleFile = (file) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setImage(reader.result);
    reader.readAsDataURL(file);
  };

  return (
    <div
      className="dropzone pixel-panel"
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
    >
      <p>Drop your tileset here or click to upload</p>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => handleFile(e.target.files[0])}
      />
    </div>
  );
}
