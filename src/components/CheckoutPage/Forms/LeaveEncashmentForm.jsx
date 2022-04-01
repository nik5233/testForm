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
  SwitchField,
  UnstyledInputField
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


function createData(LeaveType,
  Balance,
  EncashmentAvailable,
  Encash,
  AvailableDuiringNoticePeriod) {
  return { LeaveType,
    Balance,
    EncashmentAvailable,
    Encash,
    AvailableDuiringNoticePeriod };
}

const rows = [
  createData('Sick Leave', 10, 'availableEncashTypeOne', 'EncashTypeOne', 'availableInNoticeTypeOne'),
  createData('Earned Leave', 10.5, 'availableEncashTypeTwo', 'EncashTypeTwo', 'availableInNoticeTypeTwo'),
  createData('Sick Leave', 9, 'availableEncashTypeThree', 'EncashTypeThree', 'availableInNoticeTypeThree'),
  createData('Sick Leave', 11.5, 'availableEncashTypeFour', 'EncashTypeFour', 'availableInNoticeTypeFour'),
];

export default function LeaveEncashmentForm(props) {
  return (
    <div className="p-4">
      <TableContainer component={Paper} style={{border: '1px solid #d7d4d4'}}>
      <Table sx={{ minWidth: 650 }} >
        <TableHead >
          <TableRow>
            <StyledTableCell>Leave Type</StyledTableCell>
            <StyledTableCell align="left">Balance</StyledTableCell>
            <StyledTableCell align="center">Encashment Available</StyledTableCell>
            <StyledTableCell align="center">Encash</StyledTableCell>
            <StyledTableCell align="center">Available Duiring Notice Period</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow
              key={row.EncashmentAvailable}
              // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <StyledTableCell component="th" scope="row">
                {row.LeaveType}
              </StyledTableCell>
              <StyledTableCell align="left">{row.Balance}</StyledTableCell>
              <StyledTableCell align="left">
                <SwitchField name={row.EncashmentAvailable} color="primary" />
              </StyledTableCell>
              <StyledTableCell align="center">
                <UnstyledInputField  name={row.Encash} />
                {/* {row.Encash} */}
              </StyledTableCell>
              <StyledTableCell align="left">
                <SwitchField name={row.AvailableDuiringNoticePeriod} color="primary" />
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
