import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import FormUser from './FormUser'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { setUser } from '../../redux/slices/userSlice'
import { useAppDispatch } from '../../redux/hooks';

export default function Register() {

  const dispatch = useAppDispatch()
  let navigate = useNavigate();

  const handleRegister = (email: string, password: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then(({user}) => {
      console.log(user)
      dispatch(setUser({
        email: user.email,
        id: user.uid,
        token: user.refreshToken,
      }));
      navigate('/')
    })
    .catch(console.error)
  }
  return (
    <div>
      <h1>Register</h1>

      <FormUser
        title="register"
        handleClick={handleRegister}
      />
      <p>
        Or <Link to='/login'>Login</Link>
      </p>
    </div>
  )
}
