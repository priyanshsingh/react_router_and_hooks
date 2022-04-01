import React, { useState } from 'react'
// import './Hook1.css'

const Hook1 = () => {
    const[name, setName] = useState('Namashkaar!')
    const changeState = () => {
        setName("Heyo, wassup?")
    }
    return (
    <div className='container'>
       <br/>
       <br/>
        <h1 align="center" style={{color: "white"}}>{name}</h1>
        <button className='btn' style={{color:'green', fontSize:'1.2rem', marginLeft:'50%'}} onClick={changeState}>Click me again!</button>
    </div>
  )
}

export default Hook1