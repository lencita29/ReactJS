import React from 'react'
export default function Arraymethods() {
const studentInfo=[
{
name:"Rahul",
roll_no:20,
phone:985965266,
address:"mangalore",
marks:{
maths:98,
science:99,
social_science:85,
kannada:57,
hindi:98,
english:88,
}
},
{
name:"Prajwal",
roll_no:11,
phone:955716333,
address:"mangalore",
marks:{
maths:86,
science:99,
social_science:95,
kannada:98,
hindi:94,
english:88,
}
},
{
name:"Jhon",
roll_no:32,
phone:9585474564,
address:"mangalore",
marks:{
maths:90,
science:99,
social_science:97,
kannada:97,
hindi:89,
english:98,
}
},
{
name:"Karthik",
roll_no:8,
phone:9700054125,
address:"mangalore",
marks:{
maths:100,
science:97,
social_science:95,
kannada:97,
hindi:98,
english:88,
}
}]
return (
<div>
<h1 style={{color:"white",backgroundColor:"blue"}}> Array Methods</h1>
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

</tr>
{studentInfo.map((item, i)=>{
const totalMarks = item.marks.maths + item.marks.science +item.marks.social_science
+item.marks.kannada +item.marks.hindi +item.marks.english;

return(
<tr>
<td>{i+1}</td>
<td>{item.name}</td>
<td>{item.roll_no}</td>
<td>{item.phone}</td>
<td>{item.address}</td>
<td>{item.marks.maths}</td>
<td>{item.marks.science}</td>
<td>{item.marks.social_science}</td>
<td>{item.marks.kannada}</td>
<td>{item.marks.hindi}</td>
<td>{item.marks.english}</td>
<td>{totalMarks}</td>

</tr>
)
})}
</table>
</div>
)
}