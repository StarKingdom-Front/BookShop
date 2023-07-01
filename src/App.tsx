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
import FormMulti from './components/FormHookField/FormMulti';
import EasySort from './components/EasySort/EasySort';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import Map from './components/Map/Map';
import { useJsApiLoader } from '@react-google-maps/api';

const center = [
  { lat: 52.425039638689526, lng: 30.96122102539123 },
  { lat: 52.43462255921098, lng: 30.977666741641563 },
  { lat: 52.426818070043204, lng: 30.986335173359727 },
];

const API_KEY_MAP = process.env.REACT_APP_API_KEY_MAP
console.log(API_KEY_MAP)

const libraries = ['places']

function App() {

  const [searchValue, setSearchValue] = useState('')

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: API_KEY_MAP,
    libraries,
  })

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

                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
                
                <Route path='*' element={<NotFound />}/>
            </Routes>
            </main>
            {isLoaded ? <Map center={center}/> : <h2>loading map</h2>}
        <EasySort/>
        <FormMulti/>
        <Form/>
        <Footer />
      </SearchContext.Provider>
    </>
  );
}

export default App;
