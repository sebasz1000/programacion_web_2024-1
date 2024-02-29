import { useState } from 'react'
import './App.css'

const useCalculate = () => {
  
  const [counter, setCounter] = useState(3)
  const calculate = (type) => {
    if(type==="add"){
      add()
    }else if(type==="substract"){
      substract()
    }else{
      reset()
    }
  }

  const add = () => setCounter(prev => prev + 1 ) 
  const substract = () => {
    if(counter === 0){
      return
    }
    setCounter(prev => prev - 1 )
  } 
  
  const reset = () => setCounter(0)

  const counterStyle = { fontSize: "1.8rem" }

  return {
    counter,
    calculate,
    counterStyle
  }
} 

function App() {
  const {
    calculate,
    counter,
    counterStyle
  } = useCalculate()
  return (
    <>
      <main>
        <div className='container' style={{
          display: "flex",
          backgroundColor: "#d2d2d2",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem",
          gap: "2rem"
        }}>
          <Button type="substract" 
                  onClick={calculate} />
          <span style={counterStyle}>
            { counter }
          </span>
         <Button type="add" 
                 onClick={calculate} />
       <Button type="reset" 
                onClick={calculate} />
        </div>
      </main>
    </>
  )
}

function Button({ type, onClick  }){

  const getButtonText = () => {
    let text = ""
    if(type==="add"){
      text = "+"
    }else if(type==="substract"){
      text = "-"
    }else{
      text = "Reset"
    }
    return text
  }

  const handleClick = () => onClick(type)

  return (
  <button onClick={handleClick}>
    {getButtonText()}
  </button>)
}

export default App
