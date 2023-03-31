import React from 'react';
import styles from './Nav.module.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';

function Navbar() {
  return (
    // Lists out links in our navbar by tacking on th routes they'll need to take to get there
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
