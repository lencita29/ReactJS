// printing and mapping array numbers without using index 
import React from 'react'

export default function() {
    const amount=[10000,20000,30000,30400,66000,77000]
  return (
    <div>
        <h1 style={{color:"white",backgroundColor:"blue"}}>Test</h1>
       <ol align="center">
        {amount.map((item)=>{
            return (
           <li>{item}</li> )})}
       </ol>
       
    </div>
  )
}

//  const amount=[10000,20000,30000,30400,66000,77000]
//const mapping={amount.map((item)=>{ return ( <li>{item}</li> )})}
//   return (
//     <div>
//         <h1 style={{color:"white",backgroundColor:"blue"}}>Test</h1>
//        <ol align="center">
//         {mapping}
//        </ol>
       
//     </div>
