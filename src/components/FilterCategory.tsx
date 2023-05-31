import React from 'react'

export default function FilterCategory({value, onClickCategory} : {onClickCategory: any, value: number}) {

    const categories: string[] = [
        'Все', 'Фэнтези', 'Детективы', 'Боевики', 'Проза', 'Бизнес'
    ]

  return (
    <div>
        <div style={{paddingBottom: '24px'}} className='_container'>
           <div>
                <ul className='category' style={{display: 'flex', 
                justifyContent: 'space-around', 
                width: '100%', 
                flexWrap: 'wrap', 
                gap: '10px',
                paddingLeft: '0'}}>
                    {
                        categories.map((item, index: number) => (
                            <li 
                            key={index}
                            className={value === index ? 'search-active' : '' } 
                            onClick={() => onClickCategory(index)}>{item}
                            </li>
                    ))}
                </ul>
           </div>
        </div>
    </div>
  )
}
