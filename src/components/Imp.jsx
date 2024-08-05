import React from 'react'

// here import 
// named import
import {name} from './Exp'
import {number} from './Exp'
//import {name,number} from './Exp'
import {address, pincode} from './Exp' 

// default import
import Hello from './Exp'

// altogether
// import Hello,{name,number,address,pincode} from './Exp'

// in the same folder called component

export default function Imp() {
  return (
    <div><h1 style={{color:"white", backgroundColor:"green"}}>Import</h1>
{/* NAMED */}
    <h1>My name is {name}</h1>
    <h1>Phone number: {number}</h1>
    <h1>Address: {address}</h1>
    <h1>Pincode: {pincode}</h1>


{/* DEFAULT */}
    <button onClick={Hello}>HELLO</button>
    </div>
  )
}
