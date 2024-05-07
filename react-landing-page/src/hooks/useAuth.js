import { useContext } from 'react'
import { authContext } from '../context/authContext/authContext'

export const useAuth = () => {
  const context = useContext(authContext)
  if (!context) {
    throw new Error('This component should be within AuthContextProvider')
  }
  return {
    ...context
  }
}
