// shortest form of writing function without function keyword n all

import React from 'react'

export default function ArroFunction() {

function Simple(name){
    alert('this is simple function '+name)
}
// shortest form of writing the function IS ARRow function
const Arrow = ()=>(
    alert("this is arrow function")
)
// const Arrow = ()=>(
//     alert("this is arrow function")
// )


// when parathesis is passed
// const Arrow = name =>alert("this is arrow function "+name)
// 


  return (
    <div>
        <h1 style={{ color:"white",
        backgroundColor:"red"}}>Arrow function</h1>
        {/* <button onClick={Simple}> Simple function</button> */}
        <button onClick={()=>Simple("Kiran")}> Simple function</button>

        <button onClick={()=>Arrow}>Arrow Function</button>
        {/* <button onClick={()=>Arrow("Rikita")}>Arrow Function</button>  when parameter is passed */}
    </div>
  )
}
