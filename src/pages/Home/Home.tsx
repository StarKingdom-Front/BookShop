import React, { useEffect, useState } from 'react'
import CardItem from '../../components/CardItem/CardItem'

import { IBook } from '../../modals'
import { services } from '../../services/services'
import FilterCategory from '../../components/FilterCategory/FilterCategory'

export default function Home({searchValue} : {searchValue: any}) {

    const [books, setBooks] = useState<IBook[]>([])

    const [categoryId, setCategoryId] = useState(0)

    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await services.getAll(categoryId)
            setBooks(data)
          } catch(e: any) {
            console.log(e?.message)
          }
        }
    
        fetchData()
    }, [categoryId])


    const SearchItems = books.filter(item => {
      if(item.title.toLowerCase().includes(searchValue.toLowerCase())) {
        return true
      }

      return false
    }).map(book => (<CardItem key={book.id} {...book}/>))


  return (
    <div style={{background: '#1F1A2D'}}>
      <FilterCategory value={categoryId} onClickCategory={(i: number) => setCategoryId(i)}/>   
        <div className="_container">
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '20px'}}>

                {books.length ? 
                SearchItems
                : <h1>Books loading</h1>
                }
    
            </div>
        </div>
    </div>
  )
}
