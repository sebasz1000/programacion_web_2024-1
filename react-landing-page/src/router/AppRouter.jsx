import { Routes, Route } from 'react-router-dom'
import { AboutusPage, Homepage, ServicesPage, ContactusPage } from '../pages'
export function AppRouter () {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/aboutus' element={<AboutusPage />} />
      <Route path='/services' element={<ServicesPage />} />
      <Route path='/contactus' element={<ContactusPage />} />
      <Route path='/*' element={<p>404</p>} />
    </Routes>
  )
}
