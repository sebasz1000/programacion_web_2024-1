import { useState } from 'react'
import { authContext } from './authContext'
export function AuthContextProvider ({ children }) {
  const [userIsLogged, setuserIsLogged] = useState(false)

  const logIn = () => setuserIsLogged(true)

  const logOut = () => setuserIsLogged(false)

  return (
    <authContext.Provider value={{
      userIsLogged,
      logIn,
      logOut
    }}
    >
      {children}
    </authContext.Provider>

  )
}
