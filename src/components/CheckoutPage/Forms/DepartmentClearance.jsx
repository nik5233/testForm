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

function createData(DepartmentName,
  DuesCleared,
  ApprovingAuthority) {
  return { 
    DepartmentName,
    DuesCleared,
    ApprovingAuthority
  };
}

const rows = [
  createData('Finance', 'duesClearedTypeOne', 'Abhin, Head Finacnce'),
  createData('IT', 'duesClearedTypeTwo', 'Dev, Head IT'),
  createData('Marketing', 'duesClearedTypeThree', 'Avinash, Head Marketing'),
  createData('Human Resources', 'duesClearedTypeFour', 'Marsha, Human Resources'),
];

export default function LeaveEncashmentForm(props) {
  return (
    <div className="p-4">
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} >
        <TableHead >
          <TableRow>
            <TableCell>Department Name</TableCell>
            <TableCell align="center">Dues Cleared</TableCell>
            <TableCell align="left">Approving Authority</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.DepartmentName}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.DepartmentName}
              </TableCell>
              <TableCell align="center">
                <SwitchField name={row.DuesCleared} color="primary" />
              </TableCell>
              <TableCell align="left">
                {row.ApprovingAuthority}
              </TableCell>              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
