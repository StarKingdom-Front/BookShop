
import React from 'react'
import { useTranslation } from 'react-i18next';
import { Button } from '@mui/material';
import uselocalstorage from '../../hooks/uselocalstorage';
import i18n from '../../i18';


export default function ButtonLang() {

const {t} = useTranslation();
  const [language, setLanguage] = uselocalstorage('language', 'ru')

  const handleLang = () => {
    if(language === 'en') {
      i18n.changeLanguage('ru');
      setLanguage('ru')
    } else if(language === 'ru') {
      i18n.changeLanguage('en');
      setLanguage('en')
    }
  }

  return (
    <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
        <Button className='_container' variant="contained" onClick={handleLang}> 
          {language === 'ru' ? t('english') : t('russian')}
        </Button>
    </div>
  )
}
