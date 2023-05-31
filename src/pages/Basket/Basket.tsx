import React from 'react';
import './basket.css'

import {useSelector, useDispatch} from 'react-redux'
import BasketItem from '../../components/BasketItem/BasketItem';
import { clearItem } from '../../redux/slices/basketSlice';
import { Link } from 'react-router-dom';

const Basket = () => {

    const onClicCleare = () => {
        if(window.confirm('Are you sure?')) {
            dispatch(clearItem())
        }
    }

    const dispatch = useDispatch();
    const {items, totalPrice} = useSelector((state) => state.basket)
    const totalCount = items.reduce((sum, item) => sum + item.count, 0)

    return (
        <div className='basket'>
            <div className="_container">
                <div className='basket__body'>
                    <h2 style={{
                        fontSize: '32px',
                        lineHeight: '36px',
                        color: '#fafafa',
                    }}>Корзина</h2>
                    <p onClick={onClicCleare} style={{
                        fontSize: '20px',
                        color: '#fafafa',
                        opacity: '0.5',
                        margin: '20px 0px',
                        cursor: 'pointer'
                    }}>Очистить корзину</p>
                    {
                         items.map(item => <BasketItem key={item.id} {...item}/>)
                    }
                   

                    <div className="total-content">
                        <div>
                            <p>Всего товаров:</p>
                            <span>{totalCount}</span>
                        </div>
                        <div>
                            <p>Сумма заказа:</p>
                            <span>{totalPrice}</span>
                        </div>
                    </div>
                    <div className="btns">
                        <Link to='/' className='btn'>Назад</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Basket;