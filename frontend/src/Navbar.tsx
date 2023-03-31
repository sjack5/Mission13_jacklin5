import React from 'react';
import styles from './Nav.module.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/podcast">Podcast</Link>
        </li>
        <li>
          <Link to="/movielist">Movie List</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
