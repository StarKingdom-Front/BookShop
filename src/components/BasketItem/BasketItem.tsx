import React from 'react'

import './BasketItem.css'
import { useDispatch } from 'react-redux';
import { addItem, minusItem, removeItem} from '../../redux/slices/basketSlice';

export default function BasketItem({ id, title, price, img, count }) 
{

    const dispatch = useDispatch();

    const onClickPlus = () => {
            dispatch(addItem({
                id
            })
        );
    }

    const onClickMinus = () => {
        dispatch(minusItem(id))
    }

    const onClicRemove = () => {
        if(window.confirm('Are you sure?')) {
            dispatch(removeItem(id))
        }
    }


  return (
    <div style={{margin: '20px 0px'}}className='basket__item'>
        <img src={img} alt="" />
        <h3 style={{
            fontSize: '20px',
            marginLeft: '10px'
        }}>{title}</h3>
        <div>
            <span onClick={onClickMinus}>-</span>
            <p>{count}</p>
            <span onClick={onClickPlus}>+</span>
        </div>
        <p>{price * count}</p>
        <button onClick={onClicRemove}>Удалить</button>
    </div>
  )
}
