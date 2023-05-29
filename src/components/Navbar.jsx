import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { BsMic } from 'react-icons/bs';
import { SlSettings } from 'react-icons/sl';
import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';

const Navbar = () => (
  <header className={styles.main_container}>
    <div>
      <Link to="/">
        <IoIosArrowBack />
      </Link>
    </div>
    <nav>
      <div>stadiums</div>
    </nav>
    <div className={styles.icons_container}>
      <BsMic />
      <SlSettings />
    </div>
  </header>
);

export default Navbar;
