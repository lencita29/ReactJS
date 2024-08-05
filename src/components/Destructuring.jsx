// destructuring extracting the value which s required

import React from 'react'

export default function Destructuring() {
    const vehicles=["Mustang","f-150","expedition"];

    // old method
    const car=vehicles[0];
    const suv=vehicles[1];
    const truck=vehicles[2];

    // new method
    const [car1,suv1,truck1] = vehicles
    // const [car1,suv1,truck1,car2] = vehicles  will not give any error because car2 has no value so it is null


    const amount = [5+5,10+10,20+20]
    const [x,y,z]=amount
    // first it will calculate in the array



    // Destructuring objects
    const vehicle = {   
        brand : "Ford",
        model : "Mustang",
        type : "car",
        year: 2021,
        color : "red"
    }
    // use flower bracket
    const {brand, model, type, year,color}=vehicle


    // nested objects for destructuring
    const vehicle1 = {   //use flower bracket
        brand1 : "Ford",
        model1 : "Mustang",
        type1 : "car",
        year1: 2021,
        color1 : "red",
        registration:{
            city:"Mangalore",
            state:"Karnataka",
            country:"India"
        }
    }
    const {brand1, model1, type1, year1, color1,registration:{city,state} }=vehicle1
    // we dont require country


  return (
    <div>
        <h1 style={{color:"white", backgroundColor:"green"}}>Destructuring</h1>
        <h3>{car1}</h3>
        <h3>{suv1}</h3>
        <h3>{truck1}</h3>


        <h3>{x}</h3>
        <h3>{y}</h3>
        <h3>{z}</h3>
        <h4>{x},{y},{z}</h4>

        {/* destructuring objects */}
        <h3>I have {color} {model} {type}.</h3>

        {/* destructuring nested objects */}
        <h3>I have {color1} {model1} {type1}.</h3>
        <h3>I bought it in the year {year1}. registered in {city}{state}.</h3>

    </div>
  )
}
