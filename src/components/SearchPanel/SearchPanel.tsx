import React, { useContext } from 'react'

import InputBase from '@mui/material/InputBase';
import { SearchContext } from '../../services/Context';
import { useTranslation } from 'react-i18next';


interface SearchPanel {
  searchValue: (search: string) => void,
  setSearchValue: any,
}

export default function SearchPanel() {

  const {t} = useTranslation();

  const {searchValue, setSearchValue} = useContext<SearchPanel>(SearchContext)

  return (
    <div>
        <InputBase 

        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}

        className='hide'
            sx={{ ml: 1, flex: 1, color: '#8E8E93', }}
            placeholder={t('search')}
            inputProps={{ 'aria-label': 'search google maps' }}
        />
    </div>
  )
}
