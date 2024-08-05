// side effect
import React , {useEffect, useState} from 'react'

export default function Useeffect() {
    // incementing number
    const [number, setNumber]=useState(0)

    // Syntax of useEffect ,, inside arrouwfunction and dependency is passed
    const[sqr,setSqr]=useState(0)

    useEffect(()=>{
        setSqr(number*number)
    },[number])
    // [number] is dependency ,, based on this it works, without dependency it will not work , and only state can bewritten inside the dependency
    // either empty dependency or anything .. dependency must

    // setTimeout(()=>{
    //     setNumber(number+1)
    // },1000)
    // // 1000 is millisecond



  const [time, setTime] = useState(0)
    useEffect(()=> {
        const timeoutId = setTimeout (()=>{
            setTime((prevTime)=> prevTime+1);
        },1000)
        return () => clearTimeout(timeoutId);
}, [time])
const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div>
        <h1 style={{color:"white", backgroundColor:"green"}}>Use Effect</h1>

        {/* incrementing number */}
        <h1>{number}</h1>
        <button onClick={()=>setNumber(number+1)}>+</button>
        {/* wthout creating external function */}
         
         {/* square the same number using useeffect */}
        <h1>{number} -{sqr}</h1>
        <button onClick={()=>setNumber(number+1)}>+</button>


        <h1>{formatTime(time)}</h1>
    </div>
  )
}

//  task  :   create a timer
