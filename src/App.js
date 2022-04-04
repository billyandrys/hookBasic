import logo from './logo.svg';
import './App.css';
import { useState } from 'react' 

function App() {
    const [ count, setCount ] = useState(0)
  let increment = ()=> {
      
    setCount(count + 1 ) 
  }
  return (
    <div>{count}
    <button onClick={increment}> increment </button>
    </div>
  );
}

export default App;
