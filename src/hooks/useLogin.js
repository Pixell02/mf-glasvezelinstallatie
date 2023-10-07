import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { auth } from '../firebase/config';
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useAuthContext } from './useAuthContext';

export const useLogin = () => {

    const [error, setError] = useState(null);
    const { dispatch } = useAuthContext()
    const navigate = useNavigate();
    const login = (email, password) => {
        setError(null);
        signInWithEmailAndPassword(auth, email, password)
          .then((res) => {
            dispatch({type: 'LOGIN', payload: res.user })
            navigate("/create")
          })
          .catch((err) => {
            setError(err.message)
          })
    }
    return { error, login }
}