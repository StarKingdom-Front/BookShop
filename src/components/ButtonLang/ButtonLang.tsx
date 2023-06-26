
import React from 'react'
import { useTranslation } from 'react-i18next';
import { Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
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



  const [lang, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <>

      <div className='_container' style={{width: '200px'}}>
      <FormControl fullWidth>
        <InputLabel style={{color: 'white'}} id="demo-simple-select-label">lang</InputLabel>
        <Select style={{color: 'white', border: 'white'}}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={lang}
          label="lang"
          onChange={handleChange}
          onClick={handleLang}
        >
          <MenuItem  value={10}>russian</MenuItem>
          <MenuItem value={20}>english</MenuItem>
        </Select>
      </FormControl>
      </div>
    </>
  )
}
