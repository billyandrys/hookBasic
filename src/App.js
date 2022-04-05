
import { useLayoutEffect, useEffect } from 'react'


function App() {
  useEffect(()=>{
    console.log('useEffect')
  },[])
   

  useLayoutEffect(()=>{
      console.log('UseLayoutEffect')
  }, []) 
  
  
    return (
      <>
      
      </>

    )
}


export default App;
