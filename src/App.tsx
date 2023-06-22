import React, { useState } from 'react';

import Header from './layout/Header/Header';
import Footer from './layout/Footer/Footer';
import NotFound from './pages/NotFound/NotFound';
import Home from './pages/Home/Home';
import SingleItem from './pages/SingleItem/SingleItem';
import Basket from './pages/Basket/Basket';

import Form from './components/Form/Form'

import { Route, Routes } from 'react-router-dom';
import { SearchContext } from './services/Context';
import FormSubmit from './pages/FormSubmit/FormSubmit';
import ButtonLang from './components/ButtonLang/ButtonLang';






function App() {

  const [searchValue, setSearchValue] = useState('')

  



  return (
    <>

   
      <SearchContext.Provider value={{searchValue, setSearchValue}}>
        <Header />
        <ButtonLang/>
            <main className="content" style={{background: '#1F1A2D'}}>
            <Routes>
                <Route path="/" element={<Home searchValue={searchValue}/>}/>
                <Route path='/books/:id' element={<SingleItem />}/>
                <Route path='/basket' element={<Basket />}/>
                <Route path='/form' element={<FormSubmit />}/>
                <Route path='*' element={<NotFound />}/>
            </Routes>
            </main>
        <Form/>
        <Footer />
      </SearchContext.Provider>
    </>
  );
}

export default App;
