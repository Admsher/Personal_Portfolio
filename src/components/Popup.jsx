import React from "react";
import "../../src/index.css";

const Popup = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>{content.name}</h2>

        {/* Display images */}
        <div className="popup-images">
          {content.images.map((image, index) => (
            <img key={index} src={image} alt={`project_image_${index}`} />
          ))}
        </div>

        {/* Display video */}
        <div className="popup-video">
          {content.videoUrl && (
            <video controls>
              <source src={content.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>

        <p>{content.description}</p>

        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Popup;