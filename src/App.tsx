import React, { createContext, useState } from 'react';

import Header from './layout/Header';
import Footer from './layout/Footer';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import SingleItem from './pages/SingleItem';
import Basket from './pages/Basket/Basket';

import { Route, Routes } from 'react-router-dom';
import { SearchContext } from './services/Context';

function App() {

  const [searchValue, setSearchValue] = useState('')

  return (
    <>
      <SearchContext.Provider value={{searchValue, setSearchValue}}>
        <Header />
            <main className="content" style={{background: '#1F1A2D'}}>
            <Routes>
                <Route path="/" element={<Home searchValue={searchValue}/>}/>
                <Route path='/books/:id' element={<SingleItem />}/>
                <Route path='/basket' element={<Basket />}/>
                <Route path='*' element={<NotFound />}/>
            </Routes>
            </main>
        <Footer />
      </SearchContext.Provider>
    </>
  );
}

export default App;
