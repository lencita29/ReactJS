import React from 'react'

export default function ArrayMethods() {

    // first here always declare variables


    const fruits=['Apple','Banana','Orange','Mango','Kivi'];
     
    // looping statement map, one by one it will print as loop
    // mapping variable with parameter
    const mapping = fruits.map((item=><h3>{item}</h3>))
    
    // map directly without using variable
    const students=['Kiran','Rahul','Rikita','Karunya']



    // creating array of objects and printing tables
    const studentdetails = [
        {
            name:"Riyona",
            roll_number:10,
            phone:5372940,
            address:"mangalore"
        },
        {
            name:"Rikita",
            roll_number:11,
            phone:986357272,
            address:"Bangalore"
        },
        {
            name:"Sonali",
            roll_number:55,
            phone:992865756,
            address:"Udupi"
        },
        {
            name:"Sakshi",
            roll_number:56,
            phone:585854548,
            address:"Mumbai"
        }
    ]



// we can't print the object 
// let a=3546;
// let b={
//     name:"Riyona",
//     roll_number:10,
//     phone:5372940,
//     address:"mangalore"
// };



    
  return (
// ouput printing
    <div>
        {/*this parent tag is must  */}
        
        <h1 style={{ color:"white",
    backgroundColor:"red"}}>ArrayMethods</h1>

    {/* call variable mapping */}
    {mapping}

    {/* without variable */}
    {/* {students.map((item)=><h4>{item}</h4>)} */}
    {/* styling because of external css  */}



    {/* mapping using table */}
    <table border="1" align="center">
        <tr>
            <th>SI no</th>
            <th>Student Name</th>
        </tr>
        {students.map((item,index)=>{
            return(
                // tr tag is compulsory parent tag is required
                // to avoid the error and warning in the comsole just use unique key which changes
                <tr key="index">
                    <td>{index+1}</td>
                    <td>{item}</td>
                </tr>
            )
            })}
    </table>


{/* creating table for array of object */}
  {mapping}  
    <table border="1" align="center">
        
        <tr>
            <th>SI no </th>
            <th>Name</th>
            <th>Roll number</th>
            <th>Phone</th>
            <th>Address</th>
        </tr>
        {/* {studentdetails.map((i,item)= is not possible because first it will take object. it is vice versa */}
        {studentdetails.map((item,index)=>{
                return(
                    <tr key="index">
                        <td>{index+1}</td>
                        <td>{item.name}</td>
                        <td>{item.roll_number}</td>
                        <td>{item.phone}</td>
                        <td>{item.address}</td>
                    </tr>



                )

            }
            )
            }
        
    </table>



{/* creating table for array of object */}
    



{/* printimg object */}
{/* {a} */}
{/* {b} not possible */}

    </div>
    // div tag is parent
    
  ) 
}
