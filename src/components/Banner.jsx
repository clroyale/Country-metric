import React from 'react';
import stadium from '../assets/stadium.jpg';
import styles from '../styles/Banner.module.css';

function Banner() {
  return (
    <div className={styles.main_container}>
      <img
        src={stadium}
        alt="banner-stadium"
        className={styles.banner_stadium_img}
      />
      <div className={styles.banner_section_container}>
        <h1 className={styles.banner_section_main_text}>World Stadiums</h1>
      </div>
    </div>
  );
}

export default Banner;
