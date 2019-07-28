import React, { useRef } from 'react';
import "./MetroMap.css";
import metromap from '../../assets/images/metromap.png';

const MetroMap = () => {
  const imgRef = useRef(null);

  const onClick = e => {
    const { offsetX, offsetY } = e.nativeEvent;
    const { width, height } = imgRef.current;
    const rx = offsetX / width;
    const ry = offsetY / height;

    console.log(rx, ry);
  }

  return (
    <div className="metromap">
      <img
        src={metromap}
        alt="map"
        onClick={onClick}
        ref={imgRef}
      />
    </div>
  );
};

export default MetroMap;
