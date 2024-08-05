import React from 'react'

export default function Test4() {
    const MouseOver=()=>{

    }
  return (
    <div>
        <h1 style={{color:"white", backgroundColor:"green"}}>Mouseover on picture</h1>

       <img src="logo192.png" id="image" onMouseOver={MouseOver} height="300px" width="300px"></img>
    </div>
  )
}
