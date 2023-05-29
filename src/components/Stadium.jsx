import React from 'react';
import stadiumImg from '../assets/stadium.jpg';
import styles from '../styles/Stadium.module.css';

const Stadium = ({ stadium, capacity }) => (
  <div className={styles.main_container}>
    <img src={stadiumImg} alt="" />
    <div className={styles.stadium_mini_info}>
      <h2 className={styles.stadium_name}>{stadium}</h2>
      <p className={styles.capacity}>{capacity}</p>
    </div>
  </div>
);

export default Stadium;
