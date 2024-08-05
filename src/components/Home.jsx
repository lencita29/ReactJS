
//comment down when we use without router
import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';



export default function Home() {


  return (
    <div>This is my home page
      <br/><br/>
      {/* <Link to = '/ArroFunction'>Arrow Functions</Link><br/>
      <Link to = '/ArrayMethods'>Array Methods</Link> <br/>
      <Link to ='/SpreadOperator'>Spread Operaors</Link> <br/>
      <Link to ='/Test3'>Test3 table </Link> <br/>
      <Link to ='/Notfound'>Random</Link><br/>
      <Link to = '/Usestate'>Use State</Link><br/>
      <Link to = '/Useeffect'>Use Effect</Link><br/>
      <Link to = '/View'>View</Link><br/> */}
      <Link to="/ArroFunction">
        <Button color='secondary' variant="outlined" > 
        Arrow function
        </Button></Link>
      <Link to="/ArrayMethods">
        <Button color='secondary' variant="outlined">
          Arraymethods
        </Button></Link>
      <Link to="/Conditionalrendering">
        <Button color="secondary" variant="outlined">
          Conditional rendering
        </Button></Link>
        <Link to="/Destructuring">
        <Button color="secondary" variant="outlined">
        Destructuring
        </Button></Link>
        <Link to="/Events">
        <Button color="secondary" variant="outlined">
        Events
        </Button></Link>
        <Link to="/Imp">
        <Button color="secondary" variant="outlined">
         Imp
        </Button></Link>
        <Link to="/View">
        <Button color="secondary" variant="outlined">
         View
        </Button></Link>
        <Link to="/Localstorage">
        <Button color="secondary" variant="outlined">
         Localstorage
        </Button></Link>
        <Link to="/Props">
        <Button color="secondary" variant="outlined">
         Props
        </Button></Link>
        <Link to="/SpreadOperator">
        <Button color="secondary" variant="outlined">
         Spread operators
        </Button></Link>
        <Link to="/Ternary">
        <Button color="secondary" variant="outlined">
         Ternary
        </Button></Link>
        <Link to="/Useeffect">
        <Button color="secondary" variant="outlined">
         Use effect
        </Button></Link>
        <Link to="/Usestate">
        <Button color="secondary" variant="outlined">
         Use state
        </Button></Link>
        <Link to="/Variable">
        <Button color="secondary" variant="outlined">
         Variable
        </Button></Link>
        <Link to="/Employe">
        <Button color="secondary" variant="outlined">
         Employe Details
        </Button></Link>
        <Link to="/Localstemploy">
        <Button color="secondary" variant="outlined">
        Localstorage Employe Details
        </Button></Link>
        
        
      {/* task */}

      {/* use buttons from MUI instead of link and use icons*/}

    </div>
    // import this file to app.js
  )
}
// create random link and it should print 404 not found
// even for any random path

