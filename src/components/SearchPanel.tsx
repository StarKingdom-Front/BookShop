import React from 'react'

import InputBase from '@mui/material/InputBase';

export default function SearchPanel({searchValue, setSearchValue} : {searchValue: any, setSearchValue: any}) {
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
