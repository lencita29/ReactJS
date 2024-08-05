import React,  { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Localstorages() {

    const [user,setUser]=useState({})
    let nav=useNavigate()

    const handleChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})

    }

    console.log(user)

    const handleSubmit = ()=>{
        // add user id that is generated automatically
        let user_id=101
        let old=localStorage.getItem("Users")

        old=JSON.parse(old) || []
        // removing the double quote viceversa of stringify. convert string to original format

        if (old){
            if(old.length==0||old.length==null){
                user_id=101
            }
            else{
                user_id = old[old.length-1].user_id+1
            }
    }
    let newuser={
        user_id :user_id,
        name: user.name,
        phone :user.phone,
        email :user.email
    }
    // old data will be replaced, we want old data along with new
    
    const alldata=[...old,newuser]

        // {hhdj} object  {"hhdj"} is string
        // let newuser=JSON.stringify(user);

        // localStorage.setItem("Users",newuser)
        // setitem to insert value in local storage
        // removeitem to delete the data
        // 
        localStorage.setItem("Users",JSON.stringify(alldata))
        nav('/View')

    }


  return (
    <div>Localstorage
        <h3>Insert</h3>
        <input type="text" onChange={handleChange} name="name" placeholder="Enter your name"/><br/>
        <input type="number" onChange={handleChange} name="phone" placeholder="Enter your Phone number"/><br/>
        <input type="email" onChange={handleChange} name="email" placeholder="Enter your Email"/><br/>
        <button onClick={handleSubmit}>Insert</button>
        {/* use navigate function to go to view page after inserting data */}

    </div>
  )
}
