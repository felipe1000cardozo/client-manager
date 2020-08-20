const fuelPrice = 4.35;
const kmL = 25;

const calculateRoutes = (dist) => {
  var val = (fuelPrice / kmL) * 1.5 * dist * 2;
  val = Math.round(val);
  if (val < 3) val = 3;
  return val;
};

export default calculateRoutes;
