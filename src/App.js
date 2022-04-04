import logo from './logo.svg';
import './App.css';
import { useState } from 'react' 

function App() {
   const [ something, setSomething] = useState()
   console.log(something)
  return (
    <div>
    <input onChange={(e)=>setSomething(e.target.value)} text='text' placeholder='enter something' value={something}/>
    </div>
    
  )  
}


export default App;
