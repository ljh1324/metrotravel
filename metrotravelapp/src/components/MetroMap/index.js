import React, { useRef, useState } from 'react';
import "./MetroMap.css";
import metromap from '../../assets/images/metromap.png';
import InfoModal from '../InfoModal';
import utils from '../../utils';

const MetroMap = () => {
  const imgRef = useRef(null);
  const [isOpen, setOpen] = useState(false);
  const [metro, setMetro] = useState({});

  const onClick = e => {
    const { offsetX, offsetY } = e.nativeEvent;
    const { width, height } = imgRef.current;
    const rx = offsetX / width;
    const ry = offsetY / height;
    console.log(rx, ry);

    const info = utils.getMetroInfo(rx, ry);

    if (info !== undefined) {
      setMetro(info);
      toggleModal();
    }
  }

  const toggleModal = () => {
    setOpen(!isOpen);
  }

  return (
    <div className="metromap">
      <img
        src={metromap}
        alt="map"
        onClick={onClick}
        ref={imgRef}
      />

      <InfoModal isOpen={isOpen} toggleModal={toggleModal} metro={metro} />
    </div>
  );
};

export default MetroMap;
