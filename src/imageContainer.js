import React from "react";
import './imageContainer.css';
import Me from './me.jpeg';

export default function ImageContainer() {
  return (
    <div className="image-container">
      <img src={Me} alt="Picture of Presley smiling at the camera" className="image" />
    </div>
  );
}
