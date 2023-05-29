import React from 'react'

import IconButton from '@mui/material/IconButton';


import Paper from '@mui/material/Paper';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import SearchPanel from '../components/SearchPanel';


export default function Header({searchValue, setSearchValue} : {searchValue: any, setSearchValue: any}) {

  

  return (
    <>
    <div style={{background: '#1F1A2D'}}>
        <div className='_container'>
            <div className="header__body">
                <div style={{display: 'flex', flexDirection: 'row'}}> 
                    <div className="logo_body">
                        <Link to='/'><img src="/img/logo.png" alt="logo" /></Link>     
                    </div>
                    <button className='catalog__btn' style={{
                        padding: '12px 16px', 
                        borderRadius: '5px',
                        border: '0.5px solid #FFFFFF',
                        marginLeft: '26px',
                        position: 'relative',
                        color: '#fff',
                        background: '#1F1A2D',
                        cursor: 'pointer',
                    }}><span>Каталог</span></button>
                </div>
                <div className="search__panel" style={{maxWidth: '497px', width: '100%'}}>
                    <Paper
                        component="form"
                        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%', background: '#2B2244', }}
                        >
                        <IconButton type="button" sx={{ p: '10px', color: '#8E8E93' }} aria-label="search">
                            <SearchIcon />
                        </IconButton>

                        <SearchPanel searchValue={searchValue} setSearchValue={setSearchValue}/>
                        
                    </Paper>
                </div>
                <div style={{display: 'flex'}}>
                    <div className="header__item">
                        <img src="/img/favorites.png" alt="favorite" />
                        <p>Избранное</p>
                    </div>
                    <div className="header__item">
                        <img src="/img/shop.png" alt="shop" />
                        <p>Корзина</p>
                    </div>
                    <button className='btn'>Войти</button>
                </div>
            </div>
        </div>

               
    </div>
    </>
  )
}
