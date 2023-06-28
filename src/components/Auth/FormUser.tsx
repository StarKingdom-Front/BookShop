import React, { useState } from 'react'

interface FormProps {
    title: string
    handleClick: (email: string, pass: string) => void
}

export default function FormUser({title, handleClick} : FormProps) {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('')

    return (
    <div>
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

        <button onClick={() =>handleClick(email, pass)}>
            {title}
        </button>
    </div>
  )
}
