import React from 'react';
import "./MetroMap.css";
import metromap from '../../assets/images/metromap.png';

const MetroMap = () => {
  return (
    <div className="metromap">
      <img src={metromap} alt="map" />
    </div>
  );
};

export default MetroMap;
