
import { useRef } from 'react'


function App() {

  const inputRef = useRef(null)
  const onClick = ()=>{
    
    inputRef.current.focus()
  }
    
   
    return (
      <>
      <input type='text' placeholder='Ex...' ref={inputRef} />
      <button onClick={onClick}>References</button>
      </>

    )
}


export default App;
