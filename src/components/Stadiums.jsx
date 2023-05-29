import React from 'react';
import Stadium from './Stadium';
import styles from '../styles/Stadiums.module.css';

function Stadiums() {
  const Data = [
    {
      id: '1',
      stadium: 'Baba yara',
      capacity: 4500,
    },
    {
      id: '2',
      stadium: 'Accra Sports Stadium',
      capacity: 4500,
    },
    {
      id: '3',
      stadium: 'Camp Nou',
      capacity: 100000,
    },
    {
      id: '4',
      stadium: 'Signa Iduna Park',
      capacity: 9800,
    },
  ];
  return (
    <div className={styles.main_container}>
      {Data.map((stadium) => (
        <Stadium
          key={stadium.id}
          stadium={stadium.stadium}
          capacity={stadium.capacity}
        />
      ))}
    </div>
  );
}

export default Stadiums;
