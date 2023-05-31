import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { BsMic } from 'react-icons/bs';
import { SlSettings } from 'react-icons/sl';
import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';

const Navbar = () => (
  <header className={styles.main_container}>
    <div>
      <Link to="/" className={styles.back_link}>
        <IoIosArrowBack />
      </Link>
    </div>
    <nav>
      <div className={styles.country_text}>countries</div>
    </nav>
    <div className={styles.icons_container}>
      <BsMic />
      <SlSettings />
    </div>
  </header>
);

export default Navbar;
