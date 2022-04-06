
import { useState, useCallback } from 'react'
import Child from './Child'

export default function App() {
const [ toggle, setToggle ] = useState(false)
const [ data, setData ]  = useState('Yo , pls sub to chanel')

const returnComments =  useCallback(
  (name)=>{
    return name + data
  }, [data]
)


  return (
    <>
      <Child returnComments ={ returnComments}/>
      <button onClick={(e)=>{
        
        setToggle(!toggle)
      }}>
        {''}
        Toogle
      </button>
      {toggle && <h1>Toogle</h1>}
    </>
  )
    
}



