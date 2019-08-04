import data from './data';

const utils = {};
const THRESHOLD = 0.01;

utils.findMetroInfoByXY = (x, y) => {
  const metro = data.find((item) => (Math.abs(item.x - x) <= THRESHOLD && Math.abs(item.y - y) <= THRESHOLD));
  return metro;
}

utils.findMetroInfoByName = (name) => {
  const metro = data.find((item) => item.name === name);
  return metro;
}

export default utils;