
// used to transfer the data from one file to other
// create a varable in app.js a= ram before return and make changes when calling the function
// use console log to print Ram using variable value
import React from 'react'
// value to pass a single variable, and item to pass an array
// using props keyword passing the variable age, without writing it in the function def
// export default function Props({item, value,age})
export default function Props(props,{value}) {

    console.log(value);
  return (
    <div>
        <h1 style={{ color:"white",
        backgroundColor:"red"}}>Props</h1>
        {/* <h3>Good Morning</h3>  for this bring variable Ram from App.js */}
        <h3>Good Morning {value}</h3>

        {/* using props keyword  */}
        <h2>my name is {props.value}. I am {props.age} years old</h2>
       
       
        {/* Passing an array from app.js and display */}
        {/* use map and unordered list */}
        {/* we cant directly use item in the definition because of props keyword  we get error props.item.map is written */}
        <ul>
          {/* {(item.map)} gives error*/}
          {(props.item).map((num)=>{
            return(
              <li key={num}>{num}</li>
            )
          })}
        </ul>

        

    </div>
  )
}
