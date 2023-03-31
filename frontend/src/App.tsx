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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="podcast" element={<Podcast />} />
          <Route path="movielist" element={<MovieList />} />
        </Route>
      </Routes>
    </BrowserRouter>
    // <div className="App">
    //   <Home />
    //   <MovieList />
    //   <Podcast />
    // </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
export default App;
