import React, { useContext } from 'react'
import { AppContext } from './App'
const User = ()=>{
    const { userName  } = useContext(AppContext)
   return(
       <>
            <span> user :  {userName}</span>
       </>
   ) 
}

export default User