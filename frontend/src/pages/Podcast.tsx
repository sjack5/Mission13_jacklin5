import styles from '../Home.module.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';

function Podcast() {
  return (
    <>
      <html>
        <h1 className={styles.h1}>This is my podcast page</h1>
        <br></br>

        <form className={styles.form} action="https://baconsale.com/">
          <input type="submit" value="Check out my awesome podcast!"></input>
        </form>

        {/* <a href="https://baconsale.com/" className="button">
          Check out my awesome podcast!
        </a> */}

        {/* <div className="button">
          <a target="_blank" href="https://baconsale.com/">
            Click here to check out my awesome podcast!
          </a>
        </div> */}
      </html>
    </>
  );
}

export default Podcast;
