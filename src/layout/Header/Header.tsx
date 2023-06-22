import IconButton from '@mui/material/IconButton';

import styles from './Header.module.css'

import Paper from '@mui/material/Paper';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import SearchPanel from '../../components/SearchPanel/SearchPanel';

import { useAppSelector } from '../../redux/hooks';
import { useTranslation } from 'react-i18next';


const Header = () => {

    const {t} = useTranslation();

    const {items, totalPrice} = useAppSelector(state => state.basket)

  return (
    <>
    <div style={{background: '#1F1A2D'}}>
        <div className='_container'>
            <div className={styles.header__body}>
                <div style={{display: 'flex', flexDirection: 'row'}}> 
                    <div>
                        <Link to='/'><img src="/img/logo.png" alt="logo" /></Link>     
                    </div>
                    <button className={styles.catalog__btn}><span>{t('catalog')}</span></button>
                </div>
                <div className={styles.search__panel}>
                    <Paper
                        component="form"
                        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%', background: '#2B2244', }}
                        >
                        <IconButton type="button" sx={{ p: '10px', color: '#8E8E93' }} aria-label="search">
                            <SearchIcon />
                        </IconButton>

                        <SearchPanel />
                        
                    </Paper>
                </div>
                <div style={{display: 'flex'}}>
                    <div className={styles.header__item}>
                        <img src="/img/favorites.png" alt="favorite" />
                        <p>{t('favorites')}</p>
                    </div>
                    <Link to='/basket' className={styles.header__item}>
                        <img src="/img/shop.png" alt="shop" />
                        <p>{t('basket')}</p>
                        <div className={styles.num}>{items.length}</div>
                        <div className={styles.money}>{totalPrice}</div>
                    </Link>
                    <Link style={{height: '15px'}} to='/form'className='btn'>{t('change to')}</Link>
                </div>
            </div>
        </div> 
    </div>
    </>
  )
}

export default Header;