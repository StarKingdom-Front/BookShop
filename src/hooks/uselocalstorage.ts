import React, { useState } from 'react'


export default function uselocalstorage(key: any, defaultValue: string) {

    const [storedValue, setStoredValue] = useState(() => {
      try{
        const value = localStorage.getItem(key)

        if(value) {
          return JSON.parse(value)
        } else {
          localStorage.setItem(key, JSON.stringify(defaultValue))
        }
      } catch(error) {
        return defaultValue
      }
    })

    const setvalue = (newValue: number) => {
      try{
        localStorage.setItem(key, JSON.stringify(newValue))
      } catch(error) {
       console.log(error)
      }
      setStoredValue(newValue)
    }

  return [storedValue, setvalue]
}
