

import { useState, createContext } from 'react'
import User from './User'
import Loggin from './Login'
export const AppContext = createContext(null)
function App() {
const [userName, setUserName ] = useState('')
  return (
    <>
      <AppContext.Provider value={{ userName, setUserName }}>
        <Loggin/> <User/>
      </AppContext.Provider>
    </>
  )
    
}


export default App;
