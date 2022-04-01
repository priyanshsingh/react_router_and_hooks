import React, { useState } from 'react'

const Hooks = () => {

    const [val, setval] = useState("Hello, React!")
    const changeName = () =>{
        setval("You are amazing!!!")
    }
  return (
    <div>
        <body>
            <h1 align = "center" style={{color: "white"}}>{ val }</h1>            
            <button className="btn"  style={{
                marginLeft: "50%",
                fontSize:'1.2rem'
            }} onClick={changeName}>Click me</button>
        </body>
    </div>
  )
}

export default Hooks