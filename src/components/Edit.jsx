
import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import {useParams} from 'react-router-dom'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Edit() {
    let {item}=useParams()
    let nav=useNavigate()

    console.log(item)

    
    const [user,setUser]=useState({})
    // let index;

    useEffect(()=>{
        // get data from local storage
        let data = localStorage.getItem("Users")

          //  string only can be filtered 
        data=JSON.parse(data)

    // edit the code create the variable
        let single_data=data.filter((value,i)=>{

            //instead of userId wewant index value so make changes in userEffect function
            // comment down below line
          //  if (value.user_id==item){index=i}

            return i==item
        })

        // setRows(JSON.parse(data) || [])
        console.log(single_data,8888888)
        //  string only can be filtered so we write data=JSON.parse(data)

        setUser(...single_data)
        // spread operator to remove the array. we want object
    },[])

    console.log(user,4444444)
    // value is in userstate

    // copy text field from MUI
    // expand code third line copy and paste it in this compo
    //  go to return and paste   <TextField id="outlined-basic" label="Outlined" variant="outlined" />

    const handleChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})

    }

    const Edit = ()=>{
      let data = JSON.parse(localStorage.getItem("Users"))
      data.splice(item,1,user)
      // data is variable splics is afunction in javascript
      //user is new value , index is index value
      console.log(data)
      // save ,, go to output
      // if we edit and submit the previous one is not deleting . so go to view.jsx and pass index

      localStorage.setItem("Users",JSON.stringify(data))
      // Usenavigate function. when we oress edit t should update n go back to view
      nav('/View')

    }



  return (
    <div><h1>Edit</h1>
        <br/>
        {/* copy handlechange from local storage n paste here to use onchange function */}
        <TextField value={user.name}  name='name'  onChange={handleChange} id="outlined-basic" label="Enter your name" variant="outlined" size="small" /><br/><br/>
        <TextField value={user.phone} name='phone' onChange={handleChange} id="outlined-basic" label="Enter your phone" variant="outlined" size="small" /><br/><br/>
        <TextField value={user.email} name='email' onChange={handleChange} id="outlined-basic" label="Enter your email" variant="outlined" size="small" /><br/><br/>

{/* onchange to make changes in the local storage */}
        {/* create a button  */}
        <Button onClick={Edit} color='success' variant="contained">Edit</Button>

        {/* instead of userId we want index value so make changes in userEffect function      value.user_id==item ? index=i: null*/}
    </div>
  )
}
