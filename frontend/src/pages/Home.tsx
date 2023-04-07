import styles from '../Home.module.css';
import React from 'react';

function Home() {
  return (
    <>
      <html>
        <div>
          <div className={styles.div}>
            <h1 className={styles.h1}>Welcome friends,</h1>
            <h1 className={styles.h1}>let's have some fun!</h1>
          </div>

          <div className={styles.image_div}>
            <img src="./JoelHilton.png" alt="JoelHilton" className="center" />
          </div>

          <div className="row"></div>

          <div>
            <h6 className={styles.h6}>
              This website is for Joel Hilton's movie collection and will link
              you to his podcast! This website was made with React. I think it's
              pretty fun and I've learned a lot about html and the cool ways
              React can interact with it.
            </h6>
          </div>
        </div>
      </html>
    </>
  );
}

export default Home;
