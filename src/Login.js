import React, { useContext } from 'react'
import { AppContext  } from './App'

const Loggin = ()=> {
     const { setUserName } = useContext(AppContext)

    return (
        <> 
        <input type={'text'} onChange={(e)=>{setUserName(e.target.value)}}/> 
        </>
    )
}

export default Loggin