import React, { useContext } from 'react'

import InputBase from '@mui/material/InputBase';
import { SearchContext } from '../../services/Context';


interface SearchPanel {
  searchValue: (search: string) => void,
  setSearchValue: any,
}

export default function SearchPanel() {

  const {searchValue, setSearchValue} = useContext<SearchPanel>(SearchContext)

  return (
    <div>
        <InputBase 

        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}

        className='hide'
            sx={{ ml: 1, flex: 1, color: '#8E8E93', }}
            placeholder="Поиск"
            inputProps={{ 'aria-label': 'search google maps' }}
        />
    </div>
  )
}
