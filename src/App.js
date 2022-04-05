

import { useState } from 'react'
import User from './User'
import Loggin from './Login'
function App() {

  const [user, setUser ] = useState('')
      return (
      <>
        <Loggin setUser={ setUser } /> <User user = { user } />
      </>

    )
}


export default App;
