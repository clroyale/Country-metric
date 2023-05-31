import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Country from './Country';
import styles from '../styles/Countries.module.css';
import continentMapImage from './ContinentMap';

function Countries() {
  const { countries } = useSelector((state) => state.countries);
  const [findCountry, setFindCountry] = useState('');

  const handleCountrySearch = (e) => {
    setFindCountry(e.target.value);
  };

  const resultantCountries = countries.filter((item) => item.name.common.toLowerCase().includes(findCountry.toLowerCase()));

  return (
    <div className={styles.main_container}>
      <div className={styles.search_input_container}>
        <input
          type="search"
          name=""
          id=""
          placeholder="enter country name to search"
          value={findCountry}
          onChange={handleCountrySearch}
          className={styles.search_input}
        />
      </div>
      <div className={styles.countries_container}>
        {resultantCountries.map((country) => (
          <Country
            key={country.id}
            Id={country.id}
            country={country.name.common}
            region={country.subregion}
            capacity={country.population}
            image={continentMapImage(country.region, country.subregion)}
          />
        ))}
      </div>
    </div>
  );
}

export default Countries;
