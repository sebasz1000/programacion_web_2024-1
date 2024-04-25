import React from 'react'
import { Header, Footer } from './components'
import { AppRouter } from './router/AppRouter'
import { useLocation } from 'react-router-dom'
export default function App () {
  const location = useLocation()
  console.log(location)
  return (
    <>
      <Header />
      <AppRouter />
      <Footer />
    </>
  )
}
