import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Country.module.css';

const Country = ({
  country, capacity, image, region, Id,
}) => (
  <Link className={styles.main_container} to={`details/${country}`} state={Id}>
    <img id={region} src={image} alt={`${country}-flag`} />
    <div className={styles.country_mini_info}>
      <h2 className={styles.country_name}>{country}</h2>
      <p className={styles.capacity}>{capacity}</p>
    </div>
  </Link>
);

export default Country;
