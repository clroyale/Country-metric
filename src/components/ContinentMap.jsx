import asiaImg from '../assets/asia.png';
import africaImg from '../assets/africa.png';
import australiaImg from '../assets/australia.png';
import southAmericaImg from '../assets/south-america.png';
import northAmericaImg from '../assets/north-america.png';
import antarcticaImg from '../assets/antarctica.png';
import europeImg from '../assets/europe.png';

const continentMapImage = (region, subRegion) => {
  if (region === 'Asia') {
    return asiaImg;
  }
  if (region === 'Africa') {
    return africaImg;
  }
  if (region === 'Oceania') {
    return australiaImg;
  }
  if (region === 'Europe') {
    return europeImg;
  }
  if (region === 'Antarctic') {
    return antarcticaImg;
  }
  if (region === 'Americas') {
    if (subRegion === 'South America') { return southAmericaImg; }
    return northAmericaImg;
  }
  return null;
};

export default continentMapImage;
