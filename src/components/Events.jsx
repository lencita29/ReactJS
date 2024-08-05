import React from 'react'

export default function Events() {
// create functions here
    const OnClick=()=>{
    alert("this is onclick event function")
    }

// onmouseover function
    const MouseOver=()=>{alert("this is Mouse over function")}
      


  return (
    <div><h1 style={{ color:"white",
    backgroundColor:"red"}}>Events</h1>
    <button onClick={OnClick}> ONCLICK </button>


    {/* onmouseover functio can be used in the h2 */}
    <h2 onMouseOver={MouseOver} style={{color:"pink",backgroundColor:"Teal"}}> On Mouseover</h2>
    
    </div>
    
  )
}
