import React from 'react'

const Loggin = ( {setUser} )=>{
    return (
        <> 
        <input type={'text'} onChange={(e)=>{setUser(e.target.value)}}/> 
        </>
    )
}

export default Loggin