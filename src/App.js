import axios from 'axios'
import { useState, useEffect, useMemo } from 'react'


export default function App() {
const [ data, setData ] = useState(null)
const [ toggle, setToggle ]  = useState(false)
useEffect(()=>{
      axios.get('https://jsonplaceholder.typicode.com/comments')
        .then((response)=>{
            setData(response.data)
      })
}, [])

const findLongestName = ( comments )=>{
  if(!comments) return null
  let longestName = ''
  for( let i = 0; i < comments.length; i++){
    let currentName = comments[i].name
    if(currentName.length > longestName.length){
      longestName = currentName
      
    }
  }

  console.log('this was computed')
  return longestName 
}
const getLongesName = useMemo(()=>findLongestName(data), [data])

  return (
    <>
      <div>{getLongesName}</div>
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



