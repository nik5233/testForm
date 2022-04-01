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
			<TableContainer component={Paper} style={{border: '1px solid #d7d4d4'}}>
				<Table sx={{ minWidth: 650 }} >
					<TableHead >
						<TableRow>
							<StyledTableCell>No.</StyledTableCell>
							<StyledTableCell align="center">Device Type</StyledTableCell>
							<StyledTableCell align="left">Device Name</StyledTableCell>
							<StyledTableCell align="left">Serial Number</StyledTableCell>
							<StyledTableCell align="left">Alloted Date</StyledTableCell>
							<StyledTableCell align="center">Returned</StyledTableCell>
							<StyledTableCell align="left">Returned Date</StyledTableCell>
							<StyledTableCell align="left">Dues Amount</StyledTableCell>
							<StyledTableCell align="center">Dues Cleared</StyledTableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row) => (
							<StyledTableRow
								key={row.SrNumber}
								// sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
							>
								<StyledTableCell component="th" scope="row">
									{row.SrNumber}
								</StyledTableCell>
								<StyledTableCell align="left">
									{row.DeviceType}
								</StyledTableCell>
								<StyledTableCell align="left">
									{row.DeviceName}
								</StyledTableCell>
								<StyledTableCell align="left">
									{row.SerialNumber}
								</StyledTableCell>
								<StyledTableCell align="left">
									{row.AllotedDate}
								</StyledTableCell>
								<StyledTableCell align="left">
									<SwitchField name={row.Returned} color="primary" />
								</StyledTableCell>
								<StyledTableCell align="left">
									{row.ReturnedDate}
								</StyledTableCell>
								<StyledTableCell align="left">
									{row.DuesAmount}
								</StyledTableCell>
								<StyledTableCell align="left">
									<SwitchField name={row.DuesCleared} color="primary" />
								</StyledTableCell>
							</StyledTableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
}
