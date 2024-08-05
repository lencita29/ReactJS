import React from 'react'

export default function Conditionalrendering() {
    // function as component
    const Check= (isGoal) =>{
        if(isGoal){
            return <MadeGoal/>

        }
        else
        {
            return <MissedGoal/>
        }
    }   
    const MadeGoal=()=>{
       return <h1>Made Goal!</h1>
    }
    const MissedGoal=()=>{
        return <h1>Missed Goal!!</h1>
    }



  return (
    <div>
        <h1 style={{color:"white", backgroundColor:"green"}}>Conditional Rendering</h1>

        {/* old  method of calling function {Check()} */}
        <Check  isGoal={false}/>
        {/*when  function as component use first letter as capital */}
    
    </div>
  )
}
