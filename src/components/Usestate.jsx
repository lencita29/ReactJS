// main file is router now.. import it to router. when there is no router go to app.js to import
// import React from 'react'
// login form register form we use usestate
import React,{useState} from 'react'

export default function Usestate() {
    // let name="Rahul"
    const [name,setName] = useState('Rahul');
    const ChangeName = ()=>{
        setName("Kiran")
    }

    const [phone,setPhone] = useState(985462713);
    const ChangePhone =()=>{
        setPhone(958547562)
    }


    const [color,setColor] = useState("Red");



    const [state,setState]=useState()
    console.log(state);
    const HandleChange=(e)=>{
      // console.log(e)
      //console.log(e.target.value)
      // it will give the output inside the object target
      // setState(e.target.value)
      
      // to print name:"lencita"
      console.log(e.target.name)
      // setState({[e.target.name]:e.target.value})

      // to print name:"lencita" myphone:"96855"
      setState({...state,[e.target.name]:e.target.value})
      console.log(state)
      // same for other input types. if we use spread operator

      
    }

    const [change,setChange]=useState("black")
    const ChangeColor=(c)=>{
      setChange(c.target.value)
    }
    

    
    
    
  
  return (
    <div>
        <h1 style={{backgroundColor:'black', color:'yellow'}}>Usestate</h1>
        <h2>{name}</h2>
        <button onClick={ChangeName}>Change</button>

        <h2>{phone}</h2>
        <button onClick={ChangePhone}>Change</button>

        {/* without using seperate function */}
        {/* <h2>My fav color is {color}</h2>
        <button onClick={()=>setColor("Red")}>Red</button>
        <button onClick={()=>setColor("Blue")}>Blue</button>
        <button onClick={()=>setColor("Yellow")}>Yellow</button> */}

        {/* Change background and font color according to the input */}
        <h2 style={{color:color}}>My fav color is {color}</h2>
        <button onClick={()=>setColor("Red")}>Red</button>
        <button onClick={()=>setColor("Blue")}>Blue</button>
        <button onClick={()=>setColor("Yellow")}>Yellow</button><br/><hr/>


        {/* <input type="text" placeholder="Enter your name" onChange={(e)=>HandleChange(e)}/> */}
        {/* pass an event or parameter e and pass it to the function */}
        <input type="text" name='Name' placeholder="Enter your name" onChange={(e)=>HandleChange(e)}/><br/>
        <input type="number" name='Myphone' placeholder="Enter your number" onChange={(e)=>HandleChange(e)}/><br/>
        <input type="text" name='Address' placeholder="enter your address" onChange={(e)=>HandleChange(e)}/><br/>
        <input type="text" name='Email' placeholder="enter your email" onChange={(e)=>HandleChange(e)}/><br/><hr/>

        {/* changing the background of the text according we type the color */}
        <h1 style={{color:'pink', backgroundColor:change}}>Use state</h1>
        <input type="text" name="Color" placeholder="enter the color" onChange={(c)=>ChangeColor(c)}/>
        

    </div>
  )
}
