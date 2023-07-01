import { Link, useNavigate } from 'react-router-dom'
import React  from 'react'
import FormUser from './FormUser'
import { setUser } from '../../redux/slices/userSlice'

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useAppDispatch } from '../../redux/hooks'

export default function Login() {

  const dispatch = useAppDispatch()
  let navigate = useNavigate();

  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then(({user}) => {
      console.log(user)
      dispatch(setUser({
        email: user.email,
        id: user.uid,
        token: user.refreshToken,
      }));
      navigate('/')
    })
    .catch(() => alert('Пользователь не существует!'))
  }

  return (
    <div className='_container' >
      <div style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <h1>Login</h1>
        
        <FormUser title="sign in" handleClick={handleLogin}/>
        
        <p>
          Or <Link to='/register'>Register</Link>
        </p>
      </div>
    </div>
  )
}
