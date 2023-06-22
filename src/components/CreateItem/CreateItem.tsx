import React, { useState } from 'react'

import style from './CreateItem.module.css'
import { TextField } from '@mui/material'
import EasySort from '../EasySort/EasySort'


interface ICreateBook {
    setBooks: any
    handleClose: any
}

export default function CreateItem({setBooks, handleClose} : ICreateBook) {

    const [data, setData] = useState({
        price: '',
        title: '',
        img: '',
        author: '',
    })

    const createBook = (e: any) => {
        e.preventDefault()
        setBooks((prev: any) => [...prev, {id: prev.length + 1, ...data}])
        setData({
            price: '',
            title: '',
            img: '',
            author: '',
        })
        handleClose()
    }













   

  return (
    <div>
        <form className={style.form__body}>
            <TextField 
                sx={{
                    '& > :not(style)': { color: '#fff', opacity: 0.9} 
                }}
            
            id="standard-basic" label="Name" variant="standard"
                onChange={e => setData(prev => ({...prev, title: e.target.value}))}
                value={data.title}
            />
            <TextField 
                 sx={{
                    '& > :not(style)': { color: '#fff', opacity: 0.9} 
                }}
            id="standard-basic" label="Price" variant="standard"
                type="number"
                onChange={e => setData(prev => ({...prev, price: e.target.value}))}
                value={data.price}
            />
            <TextField
                 sx={{
                    '& > :not(style)': { color: '#fff', opacity: 0.9} 
                }}
            id="standard-basic" label="Author" variant="standard"
                onChange={e => setData(prev => ({...prev, author: e.target.value}))}
                value={data.author}
            />
            <TextField 
                 sx={{
                    '& > :not(style)': { color: '#fff', opacity: 0.9} 
                }}

            id="standard-basic" label="Image" variant="standard"
                onChange={e => setData(prev => ({...prev, img: e.target.value}))}
                value={data.img}
            />

            <button className='btn' onClick={e => createBook(e)}>Create Book</button>
        </form>
    </div>
  )
}
