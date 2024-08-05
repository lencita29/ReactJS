// Spread operator ...

import React from 'react'

export default function SpreadOperator() {
   const num1 =[1,2,3,4];
   const num2 = [5,6,7,8];

   const combined= [...num1,...num2]

// destructuring pick ony required one
const numbers=[1,2,3,4,5,6];
const[ one, two, three,...rest]=numbers
// all the other numbers stored in rest variable



// objects
const myVehicle = {
    brand:'ford',
    model:'Mustang',
    color: 'red'
}
const updateMyVehicle = {
    type:'car',
    year:2021,              
    color:'yellow'
}
// use flower bracket for objects
const myUpdatedVehicle = {...myVehicle,...updateMyVehicle}
console.log(myUpdatedVehicle)


  return (
    <div>
        <h1 style={{color:"white", backgroundColor:"green"}}>Spreadoperator</h1>
        <h3>{num1}</h3>
        <h3>{num2}</h3>
        <h3>{combined}</h3>

        {/* Destructuring */}
        <h3> {one},{two},{three},{rest}</h3>

    </div>
  )
}
