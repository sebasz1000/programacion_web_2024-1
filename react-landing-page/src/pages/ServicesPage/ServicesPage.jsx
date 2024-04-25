import { useNavigate } from 'react-router-dom'

export function ServicesPage () {
  const navigate = useNavigate()

  const goToPreviousPage = () => navigate('/aboutus', { state: 'hola' })

  return (
    <>
      <h1>Services Page</h1>
      <p>This is the Services Page</p>
      <button onClick={goToPreviousPage}>Back to previous page</button>
    </>
  )
}
