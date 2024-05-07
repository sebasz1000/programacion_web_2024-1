import { Routes, Route } from 'react-router-dom'
import { AboutusPage, Homepage, ServicesPage, ContactusPage } from '../pages'
import { PrivateRoute } from '../pages/PrivateRoute'
import { LoginPage } from '../pages/LoginPage'
export function AppRouter () {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route
        path='/aboutus'
        element={<PrivateRoute><AboutusPage /></PrivateRoute>}
      />
      <Route
        path='/services'
        element={<PrivateRoute><ServicesPage /></PrivateRoute>}
      />
      <Route path='/contactus' element={<ContactusPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/*' element={<p>404</p>} />
    </Routes>
  )
}
