import React from 'react';
import CountryImg from '../assets/world_map.png';
import styles from '../styles/Country.module.css';

const Country = ({ country, capacity }) => (
  <div className={styles.main_container}>
    <img src={CountryImg} alt="" />
    <div className={styles.country_mini_info}>
      <h2 className={styles.country_name}>{country}</h2>
      <p className={styles.capacity}>{capacity}</p>
    </div>
  </div>
);

export default Country;
