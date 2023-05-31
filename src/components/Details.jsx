import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import styles from '../styles/Details.module.css';

function Details() {
  const { countries } = useSelector((state) => state.countries);
  const location = useLocation();
  const Id = location.state;
  const filteredCountry = countries.filter((country) => country.id === Id);

  return (
    <div className={styles.main_container}>
      <div className={styles.coat_of_arms_name_container}>
        <div className={styles.coat_of_arms_container}>
          <img className={styles.coat_of_arms} src={filteredCountry[0].coatOfArms.png || filteredCountry[0].flags.png} alt="" />
        </div>
        <div className={styles.country_name_container}>
          <h2 className={styles.country_name}>{filteredCountry[0].name.common}</h2>
        </div>
      </div>
      <div>
        <h2 className={styles.break_down_text}>Information break down</h2>
      </div>
      <ul className={styles.information_section}>
        <li className={styles.info_list}>
          <span className={styles.info_title}>Official name:</span>
          {filteredCountry[0].name.official}
        </li>
        <li className={styles.info_list}>
          <span className={styles.info_title}>Capital:</span>
          {filteredCountry[0].capital}
        </li>
        <li className={styles.info_list}>
          <span className={styles.info_title}>Continent:</span>
          {filteredCountry[0].region}
        </li>
        <li className={styles.info_list}>
          <span className={styles.info_title}>Subregion:</span>
          {filteredCountry[0].subregion}
        </li>
        <li className={styles.info_list}>
          <span className={styles.info_title}>Population:</span>
          {filteredCountry[0].population}
        </li>
        <li className={styles.info_list}>
          <span className={styles.info_title}>Area:</span>
          {`${filteredCountry[0].area} km²`}
        </li>
      </ul>

    </div>
  );
}

export default Details;
