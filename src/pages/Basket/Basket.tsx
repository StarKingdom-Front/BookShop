import React from 'react';
import styles from './Basket.module.css'

import BasketItem from '../../components/BasketItem/BasketItem';
import { clearItem, selectBasketCount, selectBasketItems, selectBasketTotalPrice } from '../../redux/slices/basketSlice';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

const Basket = () => {

    const onClicCleare = () => {
        if(window.confirm('Are you sure?')) {
            dispatch(clearItem())
        }
    }

    const dispatch = useAppDispatch();
    // const {items, totalPrice} = useSelector((state) => state.basket)

    const items = useAppSelector(selectBasketItems)
    const totalPrice = useAppSelector(selectBasketTotalPrice)
    const totalCount = useAppSelector(selectBasketCount)

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
                         items.map((item : any) => {
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