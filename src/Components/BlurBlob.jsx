import React from 'react'
import PropTypes from 'prop-types';

function BlurBlob({ position, size }) {
    // Destructure position and size
    const { top, left } = position;
    const { width, height } = size;

  return (
    <>
      <div className="absolute" style={{ top: top, left: left, width: width, height: height, transform: 'translate(-50%, -50%)', filter: 'blur(100px)', zIndex: -1 }}>
        <div className="bg-[#b3acc1] rounded-full w-full h-full opacity-20 blur-3xl animate-blob"></div>
      </div>
    </>
  )
}

// define prop types for better type checking
BlurBlob.propTypes = {
  position: PropTypes.shape({
    top: PropTypes.string,
    left: PropTypes.string,
  }),
  size: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
  }),
};

export default BlurBlob
