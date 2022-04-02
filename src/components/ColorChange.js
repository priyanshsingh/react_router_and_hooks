import React, { useState } from 'react'

export default function ColorChange() {
    const [myStyle, setmyStyle] = useState({color:"yellow"})
    const colorChange = () => {
        setmyStyle({color:'black', fontSize: '1.3rem'})
    }
    const colorReset = () => {
        setmyStyle({color:'yellow', fontSize: '1rem'})
    }
    return (
    <>
      <body bgcolor = "red" style = {myStyle}>
          Hello  
      </body>  
        <button onClick = {colorChange}>Click Me!!!</button>
        <button onClick = {colorReset}>Reset!</button>
    </>
  )
}
  