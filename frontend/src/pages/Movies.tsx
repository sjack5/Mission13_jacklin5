import data from '../MovieData.json';
import styles from '../Home.module.css';
import React from 'react';

{
  /*Let's us grab data from json object*/
}
const MD = data.MovieData;
function MovieList() {
  return (
    <>
      <html>
        <div>
          <br></br>
          <h3 className={styles.h3}>Joel Hilton's Movie Collection</h3>
          {/*I used a style css page to help make my site look better*/}
          <br></br>
        </div>
        <div>
          <table className={styles.table}>
            <thead>
              <th className={styles.th}>Title</th>
              <th className={styles.th}>Year</th>
              <th className={styles.th}>Director</th>
              <th className={styles.th}>Rating</th>
              <th className={styles.th}>Category</th>
              <th className={styles.th}>Edited</th>
            </thead>
            <tbody>
              {MD.map(
                (
                  m /*Brings out individual elements of the json object to add to our table*/,
                ) => (
                  <tr>
                    <td className={styles.td}>{m.Title}</td>
                    <td className={styles.td}>{m.Year}</td>
                    <td className={styles.td}>{m.Director}</td>
                    <td className={styles.td}>{m.Rating}</td>
                    <td className={styles.td}>{m.Category}</td>
                    <td className={styles.td}>{m.Edited}</td>{' '}
                    {/*Added element field*/}
                  </tr>
                ),
              )}
            </tbody>
          </table>
        </div>
        <br></br>
        <br></br>
      </html>
    </>
  );
}

export default MovieList;
