import React from 'react'

export default function Ternary() {
    var a=10;
    // var b=20;
    var b=10;
    if(a==b)   
    //if(a===b)
    {
        console.log(true)
    }
    else{
        console.log(false)
    }



    // create a greeting button
        const Click=()=>{
            const time=new Date().toLocaleDateString;
            time>='12:00'? alert("Good Afternoon"):time>='4:00'? alert("Good evening"):alert("Good morning")
        }

    // using ternary
  return (

    <div>
    <h1 style={{color:"white", backgroundColor:"green"}}>Ternary</h1>
    {a==b?<h1>true</h1>:<h1>false</h1>}
    {/* {a===b?<h1>true</h1>:<h1>false</h1>} */}
    {/* == checks value === checks if the both data type and value
     */}

     <button onClick={()=> Click()}  style={{ fontSize:'30px',padding:'10px',backgroundColor:"green"}}>Greet</button>
{/* arrow function is used to avoid the appearence of aler messege before we click on greet */}


     </div>


  )
}
