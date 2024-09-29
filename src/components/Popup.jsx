import React from "react";
import '../../src/index.css';

const Popup = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>{content.name}</h2>

        {/* Map through images and display them */}
        <div className="popup-images">
          {content.images.map((image, index) => (
            <img key={index} src={image} alt={`project_image_${index}`} />
          ))}
        </div>

        <p>{content.description}</p>

        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Popup;
