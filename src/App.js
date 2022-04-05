
import { useLayoutEffect, useEffect , useRef} from 'react'



function App() {
  const inputRef = useRef(null)
  useEffect(()=>{
    inputRef.current.value = 'Hello'
  },[])
   

  useLayoutEffect(()=>{
     console.log(inputRef.current.value)
  }, []) 
  
  
    return (
      <>
      <input ref={inputRef} value='Pedro' style={{width:400, height:200}} />
      </>

    )
}


export default App;
