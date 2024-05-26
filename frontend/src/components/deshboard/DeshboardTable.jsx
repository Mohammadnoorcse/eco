import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


  
const tableContainerStyle = {
    maxHeight: 400,
    overflowY: 'auto',
  };
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function DeshboardTable() {
    
  return (
    <TableContainer component={Paper}  sx={{ backgroundColor: '#64696E' }} >
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead sx={{ backgroundColor: '#53575C'}}>
        <TableRow>
          <TableCell sx={{borderBottom: 'none',color:'#94969D',fontWeight: 'bold' }}>Dessert (100g serving)</TableCell>
          <TableCell align="right" sx={{borderBottom: 'none',color:'#94969D',fontWeight: 'bold'}}>Calories</TableCell>
          <TableCell align="right" sx={{borderBottom: 'none',color:'#94969D',fontWeight: 'bold'}}>Fat&nbsp;(g)</TableCell>
          <TableCell align="right" sx={{borderBottom: 'none',color:'#94969D',fontWeight: 'bold'}}>Carbs&nbsp;(g)</TableCell>
          <TableCell align="right" sx={{borderBottom: 'none',color:'#94969D',fontWeight: 'bold'}}>Protein&nbsp;(g)</TableCell>
        </TableRow>
      </TableHead>
      <TableBody >
        {rows.map((row) => (
          <TableRow
            key={row.name}
        
          >
            <TableCell component="th" scope="row" sx={{borderBottom: 'none',color:'#94969D'}}>
              {row.name}
            </TableCell>
            <TableCell align="right" sx={{borderBottom: 'none',color:'#94969D'}}>{row.calories}</TableCell>
            <TableCell align="right" sx={{borderBottom: 'none',color:'#94969D'}}>{row.fat}</TableCell>
            <TableCell align="right" sx={{borderBottom: 'none',color:'#94969D'}}>{row.carbs}</TableCell>
            <TableCell align="right" sx={{borderBottom: 'none',color:'#94969D'}}>{row.protein}</TableCell>
          </TableRow>
        ))}
        
      </TableBody>
      
    </Table>
  </TableContainer>
  )
}
