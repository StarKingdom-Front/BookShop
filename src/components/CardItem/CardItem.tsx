import React from 'react'

import styles from './CardItem.module.css'

import Rating from '@mui/material/Rating';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { Link } from 'react-router-dom';

import {addItem} from '../../redux/slices/basketSlice'
import { IBook } from '../../modals';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';


type CardItemProps = {
    count: number,
    id: number,
    price: number,
    title: string,
    author: string,
    img: string
}

const CardItem: React.FC<CardItemProps> = ({id, title, price, author, img}) => {

    const dispatch = useAppDispatch()

    const basketItem = useAppSelector(state => state.basket.items.find((obj: { id: number; }) => obj.id === id))

    const addCount = basketItem ? basketItem.count : '0'

    const onClickAdd = () => {
        const item = {
            id, 
            title,
            price,
            img,
        }
        dispatch(addItem(item))
    }

  return (
    <div key={id} style={{background: '#2B2244', 
                width: '277px', 
                height: '136px', 
                padding: '21px 9px', 
                display: 'flex',
                borderRadius: '5px',
                }}>
        <div style={{marginRight: '8px', width: '86px', height: '136px'}}>
            <Link to={`/books/${id}`}><img style={{width: '86px', height: '136px'}} src={img} alt="png" /></Link>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', width: '100%', justifyContent: 'space-between'}}>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                <BookmarkBorderIcon/>
            </div>

            <div>
                <h3 style={{marginBottom: '4px'}}>{title}</h3>
                <span style={{fontSize: '14px', opacity: '0.5'}}>{author}</span>
            </div>

            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '11px'}}>
                <button onClick={onClickAdd}
                className={styles.search__btn}>В корзину</button>
                {+addCount > 0 && <i>{addCount}</i>}
                <span style={{fontSize: '24px'}}>{price}₽</span>
            </div>
        </div>
    </div>
  )
}

export default CardItem