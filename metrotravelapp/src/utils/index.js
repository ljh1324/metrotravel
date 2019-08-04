import data from './data';

const utils = {};
const THRESHOLD = 0.01;

utils.getMetroInfo = (x, y) => {
  const metro = data.find((item) => (Math.abs(item.x - x) <= THRESHOLD && Math.abs(item.y - y) <= THRESHOLD));
  console.log(metro);
  return metro;
}

export default utils;