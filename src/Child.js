import React, { useEffect } from 'react'


const Child = ({returnComments})=>{

useEffect(()=>{
    console.log('FUNCTION HAS CALLED')
}, [returnComments])

    return (
        <>
               { returnComments('Pedro')}
        </>
    )
}

export default Child