import data from '../MovieData.json';
import styles from '../Home.module.css';
import React, { useEffect, useState } from 'react';
import { Movie } from '../types/movie';

function MovieList() {
  const [movieData, setMovieData] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovie = async () => {
      const rsp = await fetch('https://localhost:4000/movie');
      const temp = await rsp.json();
      setMovieData(temp);
    };
    fetchMovie();
  }, []);

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
              <th className={styles.th}>Lent To</th>
              <th className={styles.th}>Notes</th>
            </thead>
            <tbody>
              {movieData.map((m) => (
                <tr key={m.movieId}>
                  <td className={styles.td}>{m.category}</td>
                  <td className={styles.td}>{m.title}</td>
                  <td className={styles.td}>{m.year}</td>
                  <td className={styles.td}>{m.director}</td>
                  <td className={styles.td}>{m.rating}</td>
                  <td className={styles.td}>{m.edited}</td>
                  <td className={styles.td}>{m.lentTo}</td>
                  <td className={styles.td}>{m.notes}</td>
                  {/*Added element field*/}
                </tr>
              ))}
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
