// pasted from material uI .table code

// import * as React from 'react';
import React, {useEffect, useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
// import button from button of material UI
import Button from '@mui/material/Button';
// delete part
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';



function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}





export default function BasicTable() {

    
// existed code

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

// edited code
const [rows, setRows]=useState([])


// Edited code. useeffect to use data from local storage

useEffect(()=>{
    // get data from local storage
    let data = localStorage.getItem("Employees")
    setRows(JSON.parse(data) || [])
},[])



// delete part. code copied from basic modal MUI


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const [open, setOpen] = React.useState(false);

const[deleteId, setDeleteId]=useState("")
  // const handleOpen = () => setOpen(true);
  const handleOpen = (index) => {
    setDeleteId(index)
    setOpen(true);
  }

  const handleClose = () => setOpen(false);
  // create function delete
  const Delete=()=>{
    let newData= rows.filter((item,index)=>{
       return index!=deleteId
    })

    setRows(newData)
    localStorage.setItem("Employees", JSON.stringify(newData))
    handleClose()
  }



  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>SI No</TableCell>
            <TableCell align="right">Employee id</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">Salary</TableCell>
            {/* create new column */}
            <TableCell align="right">Edit</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row,index) => (
            <TableRow

        // existed code
            //   key={row.name}
            //   sx={{ '&:last-child td, &:last-child th': { border: 0 } }} //sx is style we dont use style
            // >
            //   <TableCell component="th" scope="row">
            //     {row.name}
            //   </TableCell>
            //   <TableCell align="right">{row.calories}</TableCell>
            //   <TableCell align="right">{row.fat}</TableCell>
            //   <TableCell align="right">{row.carbs}</TableCell>
            //   <TableCell align="right">{row.protein}</TableCell>
            // </TableRow>

        // edited
            key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }} //sx is style we dont use style we use
            >
              <TableCell component="th" scope="row">
                {++index}
              </TableCell>
              <TableCell align="right">{row.employ_id}</TableCell>
            <TableCell align="right">{row.name}</TableCell>
            <TableCell align="right">{row.phone}</TableCell>
            <TableCell align="right">{row.email}</TableCell>
            <TableCell align="right">{row.address}</TableCell>
            <TableCell align="right">{row.salary}</TableCell>
            {/* create new column   edit and delete*/}
            {/* import link  */}

            {/*  <Button variant="contained">contained</Button> brought from button code expanded*/}
            {/* variant are 1 contained 2 outlined 3 text  */}
            {/* different colors primary secondary danger success,error */}
            {/* when we click edit the entire data of that row should be transferred to edit  */}
            {/* go to router and make changes in the import edit */}
            {/* each person detail in the row variable . use back tick and $ instead of double quote */}
            {/* edit the component Edit.jsx */}
            {/* copy the useeffect of this compo and paste in the edit compo  */}

            {/* <TableCell align="right"><Link to="/edit">  */}
            {/* <TableCell align="right"><Link to={`/edit/${row.user_id}`}>  it is not deleting the previous data when we ake changes and submit. so we pass index */}
            <TableCell align="right"><Link to={`/empedit/${--index}`}> 
            <Button color='success' variant="contained">Edit</Button>
            </Link></TableCell>

{/* Delete */}

{/* delete doesn't require any components */}
{/* when we click on delete it has to ask are you sure you want to delete for that we use Modal in the MUI in browser */}
{/* go to browser and go to Modal  */}
            <TableCell align="right"><Link>
            <Button onClick={()=>handleOpen(index)} color='error' variant="outlined">Delete</Button>
            </Link></TableCell>
            
            </TableRow>
          ))}
        </TableBody>
      </Table>

{/* copy the code from Modal mUI and paste here  and import the Modals like box modal typograaphy*/}

     <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}> 
        {/* style is variable so copy the style variable's style or css  and paste it in the beginning*/}
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Are you sure you want to delete
          </Typography>

          {/* edited code */}
          <br/>
          <Button onClick={Delete} color='error' variant="contained" sx={{margin:"10px"}}>Yes</Button>
          <Button onClick={handleClose} color='success' variant="contained">No</Button>
          {/* B capital in the button */}

        </Box>
      </Modal>
      <Link to="/Localstemploy" ><Button  color='error' variant="outlined">Insert</Button></Link>
    </TableContainer>

   // to insert new data ..create insert and connect to localstorage
    
  );
}