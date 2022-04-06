import axios from 'axios'
import { useState, useEffect } from 'react'


export default function App() {
const [data, setData ] = useState(null)

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
      console.log(longestName)
    }
  }

  console.log('this was computed')
  return longestName 
}

  return (
    <>
      <div>{findLongestName(data)}</div>
      
    </>
  )
    
}



