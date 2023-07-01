import React, { useState } from 'react'

import style from './FormUser.module.css'

interface FormProps {
    title: string
    handleClick: (email: string, pass: string) => void
}

export default function FormUser({title, handleClick} : FormProps) {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('')

    return (
    <div className='_container'>
        <div className={style.body}>
            <div className={style.form__input}>
                <input type="email" 
                value={email}
                placeholder='Email'
                onChange={(e) => setEmail(e.target.value)}
                />

                <input type="password" 
                value={pass}
                placeholder='Password'
                onChange={(e) => setPass(e.target.value)}
                />
            </div>

            <button className='btn' onClick={() =>handleClick(email, pass)}>
                {title}
            </button>
        </div>
    </div>
  )
}
