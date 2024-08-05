import React,  { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { address } from './Exp'

export default function Localstemploye() {

    const [employe,setEmploye]=useState({})
    let nav=useNavigate()

    const handleChange=(e)=>{
        setEmploye({...employe,[e.target.name]:e.target.value})

    }

    console.log(employe)

    const handleSubmit = ()=>{
        // add user id that is generated automatically
        let employ_id=101
        let old=localStorage.getItem("Employees")

        old=JSON.parse(old) || []
        // removing the double quote viceversa of stringify. convert string to original format

        if (old){
            if(old.length==0||old.length==null){
                employ_id=101
            }
            else{
                employ_id = old[old.length-1].employ_id+1
            }
    }
    let newemploye={
        employ_id :employ_id,
        name: employe.name,
        phone :employe.phone,
        email :employe.email,
        address:employe.address,
        salary:employe.salary

    }
    // old data will be replaced, we want old data along with new
    
    const alldata=[...old,newemploye]

        // {hhdj} object  {"hhdj"} is string
        // let newuser=JSON.stringify(user);

        // localStorage.setItem("Users",newuser)
        // setitem to insert value in local storage
        // removeitem to delete the data
        // 
        localStorage.setItem("Employees",JSON.stringify(alldata))
        nav('/Employe')

    }


  return (
    <div>Localstorage
        <h3>Insert</h3>
        <input type="text" onChange={handleChange} name="name" placeholder="Enter your name"/><br/>
        <input type="number" onChange={handleChange} name="phone" placeholder="Enter your Phone number"/><br/>
        <input type="email" onChange={handleChange} name="email" placeholder="Enter your Email"/><br/>
        <input type="address" onChange={handleChange} name="address" placeholder="Enter your address"/><br/>
        <input type="salary" onChange={handleChange} name="salary" placeholder="Enter your salary"/><br/>

        <button onClick={handleSubmit}>Insert</button>
        {/* use navigate function to go to view page after inserting data */}

    </div>
  )
}
