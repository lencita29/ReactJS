import React from 'react'

export default function Test3() {
    const studentMarks=[
        {
        name:"Kiran",
        roll_no:20,
        phone:985965266,
        address:"mangalore",
        marks:{
        maths:98,
        science:"",
        social_science:85,
        kannada:"",
        hindi:98,
        english:88,
        }
        },
        {
        name:"Akshay",
        roll_no:11,
        phone:955716333,
        address:"mangalore",
        marks:{
        maths:86,
        science:99,
        social_science:95,
        kannada:"",
        hindi:94,
        english:88,
        }
        },
        {
        name:"Sonali",
        roll_no:32,
        phone:9585474564,
        address:"mangalore",
        marks:{
        maths:90,
        science:99,
        social_science:"",
        kannada:97,
        hindi:89,
        english:98,
        }
        },
        {
        name:"Riyonna",
        roll_no:8,
        phone:9700054125,
        address:"mangalore",
        marks:{
        maths:100,
        science:97,
        social_science:95,
        kannada:97,
        hindi:"",
        english:88,
        }
        }]
  return (
    <div>
        <h1 style={{color:"white", backgroundColor:"green"}}>Test 3</h1>
        <table border={"3"} align={"center"}>
<tr>
<th>Sl No</th>
<th>Name</th>
<th>Roll No</th>
<th>Phone</th>
<th>Address</th>
<th>maths</th>
<th>science</th>
<th>social science</th>
<th>kannada </th>
<th>hindi </th>
<th>english</th>
<th>Total marks</th>
<th>Percentage</th>
</tr>
{studentMarks.map((item, i)=>{
const totalMarks = +item.marks.maths + +item.marks.science + +item.marks.social_science
+ +item.marks.kannada + +item.marks.hindi + +item.marks.english;
const percentage = (totalMarks*100)/600;

return(
<tr>
<td>{i+1}</td>
<td>{item.name}</td>
<td>{item.roll_no}</td>
<td>{item.phone}</td>
<td>{item.address}</td>
<td>{item.marks.maths!==""? item.marks.maths:'ABSENT'}</td>
<td>{item.marks.science!==""? item.marks.science:'ABSENT'}</td>
<td>{item.marks.social_science!==""? item.marks.social_science:'ABSENT'}</td>
<td>{item.marks.kannada!==""? item.marks.kannada:'ABSENT'}</td>
<td>{item.marks.hindi!==""? item.marks.hindi:'ABSENT'}</td>
<td>{item.marks.english!==""? item.marks.english:'ABSENT'}</td>
<td>{totalMarks}</td>
<td>{percentage}</td>

</tr>
)
})}
</table>
</div>
)
}

// // print absent wherever the marks are not obtained
// <td>{percentage}</td>
// const percentage = (totalMarks/600)*100