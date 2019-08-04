import React, { useRef, useState } from 'react';
import "./MetroMap.css";
import metromap from '../../assets/images/metromap.png';
import InfoModal from '../InfoModal';
import utils from '../../utils';
import { Input } from 'reactstrap';

const MetroMap = () => {
  const imgRef = useRef(null);
  const [isOpen, setOpen] = useState(false);
  const [metro, setMetro] = useState({});
  const [station, setStation] = useState('');

  const onClick = e => {
    const { offsetX, offsetY } = e.nativeEvent;
    const { width, height } = imgRef.current;
    const rx = offsetX / width;
    const ry = offsetY / height;
    console.log(rx, ry);

    const info = utils.findMetroInfoByXY(rx, ry);

    if (info !== undefined) {
      setMetro(info);
      toggleModal();
    }
  }

  const toggleModal = () => {
    setOpen(!isOpen);
  }

  const handleChange = (e) => {
    setStation(e.target.value);
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const info = utils.findMetroInfoByName(station);
      setMetro(info);
      toggleModal();

      setStation('');
    }
  }

  return (
    <div className="metromap">
      <div className="container">
        <Input
          type="text"
          name="station"
          value={station}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="역 검색"
        />
      </div>
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
