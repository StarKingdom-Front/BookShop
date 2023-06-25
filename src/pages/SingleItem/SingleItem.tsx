import React, { useEffect, useState } from 'react'

import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import Rating from '@mui/material/Rating';
import { Link, useParams } from 'react-router-dom';
import { services } from '../../services/services';
import { IBook } from '../../modals';

import styles from './SingleItem.module.css'


export default function SingleItem() {

    const {id} = useParams()
    const [book, setBook] = useState<IBook>({} as IBook)

    useEffect(() => {
        if(!id) return

        const fetchData = async () => {
            
          try {
            const data = await services.getById(id)
            setBook(data)
          } catch {
            console.log('error id')
          }
        }
    
        fetchData()
    }, [id])

    if(!book) return <p className='_container'>Loading...</p>

  return (
    <div className='_container'>
        <Link to="/" className='btn' style={{width: '100px', marginBottom: '30px'}}>На главную</Link>
        <div>
            <div className={styles.card__body}>
                <div style={{maxWidth: '820px', width: '100%'}}>
                    <div className={styles.body__left}>
                        <div className={styles.img__single}>
                            <img src={book.img} alt="img" />
                        </div>
                        <div className={styles.info__card}>
                            <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                            <h1>{book.title}</h1>
                            <span>{book.author}</span>
                            <div>
                                <div className={styles.item__info}>
                                    <p>ID товара</p>
                                    <span>{book.id}</span>
                                </div>
                                <div className={styles.item__info}>
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
                    <span style={{fontSize: '32px'}}>{book.price} ₽</span>
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '12px 0px 29px 0px'}}>
                        <button className='btn' style={{width: '276px'}}>Купить</button>
                        <BookmarkBorderIcon/>
                    </div>
                    <div className={styles.item__delivery}>
                        <span>Доставка курьером, 175 ₽</span>
                    </div>
                    <div className={styles.item__delivery}>
                        <span>В магазины сети, Бесплатно</span>
                    </div>
                    <div className={styles.item__delivery}>
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
