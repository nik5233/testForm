import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { 
  // InputField, 
  SwitchField
} from '../../FormFields';

function createData(
  SrNumber,
  DeviceType,
  DeviceName,
  SerialNumber,
  AllotedDate,
  Returned,
  ReturnedDate,
  DuesAmount,
  DuesCleared) {
  return { 
    SrNumber,
    DeviceType,
    DeviceName,
    SerialNumber,
    AllotedDate,
    Returned,
    ReturnedDate,
    DuesAmount,
    DuesCleared
  };
}

const rows = [
  createData('01', 'Mobile', 'IPhone 12', '120FRED4322', '20/02/2021', 'returnedOne', '20/02/2022', 'Rs. 21,000', 'duesClearedOne'),
  createData('02', 'Laptop', 'MacBook Pro', '120ASED4322', '22/02/2021', 'returnedTwo', '20/02/2022', 'Rs. 21,000', 'duesClearedTwo'),
  createData('03', 'Desktop', 'Apple', '120FGFD4322', '26/03/2021', 'returnedThree', '20/02/2022', 'Rs. 21,000', 'duesClearedThree'),
  createData('04', 'Printer', 'HP', '120FRED0922', '28/05/2021', 'returnedFour', '20/02/2022', 'Rs. 21,000', 'duesClearedFour'),
];

export default function LeaveEncashmentForm(props) {
  return (
    <div className="p-4">
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} >
        <TableHead >
          <TableRow>
            <TableCell>No.</TableCell>
            <TableCell align="center">Device Type</TableCell>
            <TableCell align="left">Device Name</TableCell>
            <TableCell align="left">Serial Number</TableCell>
            <TableCell align="left">Alloted Date</TableCell>
            <TableCell align="left">Returned</TableCell>
            <TableCell align="left">Returned Date</TableCell>
            <TableCell align="left">Dues Amount</TableCell>
            <TableCell align="left">Dues Cleared</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.SrNumber}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.SrNumber}
              </TableCell>
              <TableCell align="left">
                {row.DeviceType}
              </TableCell> 
              <TableCell align="left">
                {row.DeviceName}
              </TableCell> 
              <TableCell align="left">
                {row.SerialNumber}
              </TableCell> 
              <TableCell align="left">
                {row.AllotedDate}
              </TableCell> 
              <TableCell align="left">
                <SwitchField name={row.Returned} color="primary" />
              </TableCell> 
              <TableCell align="left">
                {row.ReturnedDate}
              </TableCell> 
              <TableCell align="left">
                {row.DuesAmount}
              </TableCell> 
              <TableCell align="center">
                <SwitchField name={row.DuesCleared} color="primary" />
              </TableCell>            
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
