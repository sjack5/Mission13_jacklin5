import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import MovieList from './pages/Movies';
import Podcast from './pages/Podcast';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';

function App() {
  return (
    <>
      <BrowserRouter>
        {/*This is the way to navigate between pages */}
        <Routes>
          <Route path="/" element={<Layout />}>
            {/*Takes us to navbar and the elements found in it*/}
            <Route index element={<Home />} />
            {/*This is default view because it has no specified path*/}
            <Route path="podcast" element={<Podcast />} />
            {/*Takes us to podcast page*/}
            <Route path="movielist" element={<MovieList />} />
            {/*Takes us to movie list page */}
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <div className="App">
        <Home />
        <MovieList />
        <Podcast />
      </div> */}
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
{
  /*We use ReactDom to help with Navbar. We had to install this package*/
}
export default App;
