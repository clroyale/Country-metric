import React from 'react';
import styles from '../styles/Banner.module.css';
import worldImg from '../assets/world_map.png';

function Banner() {
  return (
    <div className={styles.main_container}>
      <img src={worldImg} className={styles.banner_img} alt="world-map" />
      <h1 className={styles.banner_section_main_text}>Countries of The World</h1>
    </div>
  );
}

export default Banner;
