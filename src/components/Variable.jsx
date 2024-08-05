import React from 'react'

export default function Variable() {
  {/* create a variable */}
//  a=10
//  it will give error because it is in strict mode
// use let var const
// let is block keyword where we can access the variable nly in that block
// var can be used outside the blocks
let a=10;
var b=20;
const c=30;

// can change the value of variable
a=100;
b=200;
// c=300;

var name="Jhon";
console.log(name,1111)
if(true){
    var name="kiran"
    console.log(name,2222)
}
console.log(name,3333)
// print kiran


// let name="Jhon";
// console.log(name,1111)
// if(true){
//     let name="kiran"
//     console.log(name,2222)
// }
// console.log(name,3333)
// print john

 return (
    <div>
<h1 style={{ color:"white",
        backgroundColor:"red"}}>variables</h1>
        <h2> {a} </h2>
        <h2>{b}</h2>
        <h2>{c}</h2>

    </div>
  )
}
