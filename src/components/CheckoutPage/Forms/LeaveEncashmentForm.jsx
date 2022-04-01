import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { InputField, 
  SwitchField
} from '../../FormFields';

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
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} >
        <TableHead >
          <TableRow>
            <TableCell>Leave Type</TableCell>
            <TableCell align="center">Balance</TableCell>
            <TableCell align="center">Encashment Available</TableCell>
            <TableCell align="center">Encash</TableCell>
            <TableCell align="center">Available Duiring Notice Period</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.EncashmentAvailable}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.LeaveType}
              </TableCell>
              <TableCell align="right">{row.Balance}</TableCell>
              <TableCell align="right">
                <SwitchField name={row.EncashmentAvailable} color="primary" />
              </TableCell>
              <TableCell align="right">
                <InputField name={row.Encash} />
                {/* {row.Encash} */}
              </TableCell>
              <TableCell align="right">
                <SwitchField name={row.AvailableDuiringNoticePeriod} color="primary" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
