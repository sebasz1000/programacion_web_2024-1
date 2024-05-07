import { useLocation } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

export function LoginPage () {
  const { logIn } = useAuth()
  const { state } = useLocation()
  console.log(state.prevPage)
  return (
    <>
      <h1>LOGIN PAGE</h1>
      <button onClick={() => logIn()}>Login</button>
    </>
  )
}
