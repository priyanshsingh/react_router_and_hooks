import React, { useState } from 'react'

export default function Hook2() {
    const [color, newColor] = useState("Dark Blue")

    const clickRed = () => {
        newColor("Red")
    }
    const clickYellow = () => {
        newColor("Yellow")
    }
    const clickGreen = () => {
        newColor("Green")
    }
    const clickBlue = () => {
        newColor("Blue")
    }
    const clickPink = () => {
        newColor("Pink")
    }
    
  return (
    <>
        <h1 style={{color:"#2980B9", textAlign:'center'}}>My favourite color is, {color}</h1>
        <div className="wrapper" style={{textAlign:'center'}}>
            <button style={{position: "absolute",top: "50%", color:'red', fontSize:'1.2rem'}} onClick = {clickRed}>Red</button>
            <button style={{position: "absolute",top: "45%", color:'orange', fontSize:'1.2rem'}} onClick = {clickYellow}>Yellow</button>
            <button style={{position: "absolute",top: "40%", color:'green', fontSize:'1.2rem'}} onClick = {clickGreen}>Green</button>
            <button style={{position: "absolute",top: "35%", color:'blue', fontSize:'1.2rem'}} onClick = {clickBlue}>Blue</button>
            <button style={{position: "absolute",top: "30%", color:'pink', fontSize:'1.2rem'}} onClick = {clickPink}>Pink</button>
        </div>
    </>
  )
}
