import React, { useState, useImperativeHandle, forwardRef } from 'react'


const Button = forwardRef(( props, ref )=>{
    const [toggle, setToggle] = useState(false)

    useImperativeHandle(ref, ()=>({
        alterToggle(){
            setToggle(!toggle)
        }
    }))
    
    return(
        <>
            <button> Button from child </button>
             
            { toggle && <span>toggle</span> }
        </>
    )
})

export default Button