import Button from './Button'

import { useRef } from 'react'

function App() {
   const buttonRef = useRef(null)
      return (
      <>
        <button  onClick={()=>{  
          buttonRef.current.alterToggle()
        }}
        >
        Parent form
         </button>
        <Button ref={buttonRef} />
      </>

    )
}


export default App;
