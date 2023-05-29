import React from 'react'
import Rating from '@mui/material/Rating';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { IBook } from '../modals';
import { Link } from 'react-router-dom';



export default function CardItem({book} : {book: IBook}) {

  return (
    <div key={book.id} style={{background: '#2B2244', 
                width: '277px', 
                height: '136px', 
                padding: '21px 9px', 
                display: 'flex',
                borderRadius: '5px',
                }}>
        <div style={{marginRight: '8px'}}>
            <Link to={`/books/${book.id}`}><img src={book.img} alt="png" /></Link>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', width: '100%', justifyContent: 'space-between'}}>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                <BookmarkBorderIcon/>
            </div>

            <div>
                <h3 style={{marginBottom: '4px'}}>{book.title}</h3>
                <span style={{fontSize: '14px', opacity: '0.5'}}>{book.author}</span>
            </div>

            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '11px'}}>
                <button className='search-btn'>В корзину</button>
                <span style={{fontSize: '24px'}}>575₽</span>
            </div>
        </div>
    </div>
  )
}
