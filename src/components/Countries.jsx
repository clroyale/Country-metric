import React from 'react';
import Country from './Country';
import styles from '../styles/Countries.module.css';
import imagePath from '../assets/world_map.png';

function Countries() {
  const Data = [
    {
      id: '1',
      name: 'Baba yara',
      capacity: 4500,
    },
    {
      id: '2',
      name: 'Accra Sports Stadium',
      capacity: 4500,
    },
    {
      id: '3',
      stadium: 'Camp Nou',
      capacity: 100000,
    },
    {
      id: '4',
      name: 'Signa Iduna Park',
      capacity: 9800,
    },
  ];
  return (
    <div className={styles.main_container}>
      {Data.map((country) => (
        <Country
          key={country.id}
          country={country.name}
          capacity={country.capacity}
          image={imagePath}
        />
      ))}
    </div>
  );
}

export default Countries;
