import React, { useEffect, useState } from 'react'

import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import Rating from '@mui/material/Rating';
import { Link, useParams } from 'react-router-dom';
import { services } from '../services/services';
import { IBook } from '../modals';


export default function SingleItem() {

    const {id} = useParams()
    const [book, setBook] = useState<IBook>({} as IBook)

    useEffect(() => {
        if(!id) return

        const fetchData = async () => {
          const data = await services.getById(id)
    
          setBook(data)
        }
    
        fetchData()
    }, [id])

    if(!book) return <p className='_container'>Loading...</p>

  return (
    <div className='_container'>
        <Link to="/"className='btn' style={{width: '100px', marginBottom: '30px'}}>На главную</Link>
        <div>
            <div className='card__body' style={{display: 'flex', justifyContent: 'space-between'}}>
                <div style={{maxWidth: '820px', width: '100%'}}>
                    <div className='body-left'>
                        <div className='img-single'>
                            <img src={book.img} alt="" />
                        </div>
                        <div className='info-card'>
                            <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                            <h1>{book.title}</h1>
                            <span>{book.author}</span>
                            <div>
                                <div className='item-info'>
                                    <p>ID товара</p>
                                    <span>{book.id}</span>
                                </div>
                                <div className='item-info'>
                                    <p>Категория</p>
                                    <span>{book.category}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{padding: '32px', 
                            background: 'rgba(43, 34, 68, 1)', 
                            borderRadius: '5px', 
                            maxWidth: '375px',
                            width: '100%', 
                            marginLeft: '20px',
                            height: '186px'}}>
                    <span style={{fontSize: '32px'}}>525 ₽</span>
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '12px 0px 29px 0px'}}>
                        <button className='btn' style={{width: '276px'}}>Купить</button>
                        <BookmarkBorderIcon/>
                    </div>
                    <div className='item-delivery'>
                        <span>Доставка курьером, 175 ₽</span>
                    </div>
                    <div className='item-delivery'>
                        <span>В магазины сети, Бесплатно</span>
                    </div>
                    <div className='item-delivery'>
                        <span>В пункты выдачи, 110 ₽</span>
                    </div>
                </div>
            </div>
            <div>
                <p>{book.desc1}</p>
            </div>
        </div>
    </div>
  )
}
