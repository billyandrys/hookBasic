import axios from 'axios'
import { useEffect, useState } from 'react'


function App() {

  const [data, setData ] = useState('')
  const [ count, setCount ] = useState(0)
  useEffect(()=>{
      axios.get('https://jsonplaceholder.typicode.com/comments')
        .then(response=>{
          setData(response.data[count].email)
          console.log("API WAS CALLED")
        }, [count])}
  )  
   
    return (
      <>
      <h1>{ data }</h1>
      <button onClick={()=>setCount(count + 1 )}>{count}</button>
      </>

    )
}


export default App;
