import React from 'react';
import styles from './Basket.module.css'

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
    const totalCount = items.reduce((sum: number, item: any) => sum + item.count, 0)

    return (
        <div className={styles.basket}>
            <div className="_container">
                <div className={styles.basket__body}>
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
                         items.map(item => {
                             return <BasketItem key={item.id} {...item} />;
                         })
                    }
                   

                    <div className={styles.total__content}>
                        <div>
                            <p>Всего товаров:</p>
                            <span>{totalCount}</span>
                        </div>
                        <div>
                            <p>Сумма заказа:</p>
                            <span>{totalPrice}</span>
                        </div>
                    </div>
                    <div className={styles.btns}>
                        <Link to='/' className='btn'>Назад</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Basket;