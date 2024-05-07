import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

export function PrivateRoute ({ children }) {
  const { userIsLogged } = useAuth()
  const { pathname } = useLocation()

  console.log(pathname)
  // 1) si el usario no está logeado enviarme al homepage/ LoginPage
  // 2) si el usuario está logeado devuelvame el children
  if (!userIsLogged) {
    return (
      <Navigate
        to='/login'
        state={{ prevPage: '/aboutus' }}
      />
    )
  }

  return children
}
