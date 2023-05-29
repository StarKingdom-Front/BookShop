import React, { useState } from 'react';

import Header from './layout/Header';
import Footer from './layout/Footer';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import SingleItem from './pages/SingleItem';

import { Route, Routes } from 'react-router-dom';

function App() {

  const [searchValue, setSearchValue] = useState('')

  return (
    <>
      <Header searchValue={searchValue} setSearchValue={setSearchValue}/>
          <main className="content" style={{background: '#1F1A2D'}}>
          <Routes>
              <Route path="/" element={<Home searchValue={searchValue}/>}/>
              <Route path='/books/:id' element={<SingleItem />}/>
              <Route path='*' element={<NotFound />}/>
          </Routes>
          </main>
        <Footer />
    </>
  );
}

export default App;
