import styles from '../Home.module.css';

function Podcast() {
  return (
    <>
      <html>
        <h1 className={styles.h1}>This is my podcast page</h1>
        <br></br>

        {/*Made a button for my link because it felt fun and different than just throwing up a href*/}
        <form className={styles.form} action="https://baconsale.com/">
          <input type="submit" value="Check out my awesome podcast!"></input>
        </form>
      </html>
    </>
  );
}

export default Podcast;
