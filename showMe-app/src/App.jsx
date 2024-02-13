import { useState } from 'react'

export default function App(){
  
  // ! Nunca se debe manipular el estado directamente!!
  //* state puede ser un number, booleano, objecto, string, null, undefined
  const [showMenu, setShowMenu ] = useState(false)
  
  console.log('valor de state:', showMenu)
  const handleClick = (event) => {
    //! manipulación directa -> showMenu = true
    // *tiene que colocar showMenu en true
    setShowMenu(!showMenu)
  }
  
  return(
    <>
     <div className="app-bg">
      <div className="container">
        <button onClick={handleClick}>Show Pharagrap</button>
      <header className="header">
            <h1>Traffic Lights</h1>
            <p>React events and hooks</p>
      </header>
        <main>
          {
            showMenu
              ? (<p className={`${ showMenu ? '' : 'hidden'}`}
                    style={{ backgroundColor: 'red'}}>
                      Lights
                </p>) 
              : null
          }  
        </main>
      </div>
      </div>
    </>
  )
}
