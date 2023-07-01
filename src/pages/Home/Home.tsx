import React, { useEffect, useState } from 'react'
import CardItem from '../../components/CardItem/CardItem'

import { IBook } from '../../modals'
import { services } from '../../services/services'
import FilterCategory from '../../components/FilterCategory/FilterCategory'

import ModalCreate from '../../components/ModalCreate/ModalCreate'
import { useAuth } from '../../redux/use-auth'
import { useAppDispatch } from '../../redux/hooks'
import { Link } from 'react-router-dom'
import { removeUser } from '../../redux/slices/userSlice'

export default function Home({searchValue} : {searchValue: any}) {

    const [books, setBooks] = useState<IBook[]>([])

    const [categoryId, setCategoryId] = useState(0)

    const {isAuth, email} = useAuth();
    const dispatch = useAppDispatch()

    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await services.getAll(categoryId)
            setBooks(data)
          } catch(e: any) {
            console.log('error')
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
      <div className='_container' style={{display:'flex',width: '100%', alignItems: 'center'}}>
        <Link style={{maxWidth: '200px', width: '100%', marginBottom: '15px', height: '15px', textDecoration: 'none'}} onClick={() => dispatch(removeUser)} 
            to='/register'className='btn'>
                {isAuth ? <p>Log out from {email}</p> : <p>Register</p>}
        </Link>
      </div>
      <FilterCategory value={categoryId} onClickCategory={(i: number) => setCategoryId(i)}/>
      <ModalCreate setBooks={setBooks}/>
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
