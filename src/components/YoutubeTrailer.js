import React from "react";
import PropTypes from "prop-types";

const YouTrailer = ({ embedId }) => (
  <div className="video-responsive">
    <iframe
      width="550"
      height="300"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

YouTrailer.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YouTrailer;