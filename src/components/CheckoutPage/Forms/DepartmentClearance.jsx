import React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { 
  // InputField, 
  SwitchField
} from '../../FormFields';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
	  backgroundColor: theme.palette.action.hover,
	  color: theme.palette.common.black,
	  fontWeight: 'bold',
		borderRight: `1px solid #d7d4d4`
	},
	[`&.${tableCellClasses.body}`]: {
	  fontSize: 14,
	  borderRight: `1px solid #d7d4d4`
	},
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
	'&:nth-of-type(even)': {
	  backgroundColor: theme.palette.action.hover,
	},
	// hide last border
	'&:last-child td, &:last-child th': {
	//   border: 0,
	},
  }));

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
      <TableContainer component={Paper} style={{border: '1px solid #d7d4d4'}}>
      <Table sx={{ minWidth: 650 }} >
        <TableHead >
          <TableRow>
            <StyledTableCell>Department Name</StyledTableCell>
            <StyledTableCell align="center">Dues Cleared</StyledTableCell>
            <StyledTableCell align="left">Approving Authority</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow
              key={row.DepartmentName}
              // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <StyledTableCell component="th" scope="row">
                {row.DepartmentName}
              </StyledTableCell>
              <StyledTableCell align="center">
                <SwitchField name={row.DuesCleared} color="primary" />
              </StyledTableCell>
              <StyledTableCell align="left">
                {row.ApprovingAuthority}
              </StyledTableCell>              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
