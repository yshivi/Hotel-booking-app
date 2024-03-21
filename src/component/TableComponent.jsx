import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';



function createData(name, calories) {
    return { name, calories };
}

function TableComponent() {
    const location = useLocation();
    console.log(location.state)
    const rows = [
        createData('Full name', location.state.firstName, " " + location.state.lastName),
        createData('Phone Number', location.state.phoneNumber),
        createData('Email', location.state.email),
        createData('Address', location.state.address),
        createData('Rooms', location.state.room),
        createData('date', location.state.checkin, " To " + location.state.checkout)
    ];
    // const {firstName, lastName, phoneNumber,email,room,place} = state 
    return (
        <div>

            <nav className='nav-bar'>
                <h1>Booking.com</h1>
            </nav>
            <div id='text'>
            <Typography variant="h3"  >
                Thank You
            </Typography>
            </div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 350 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Details</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.calories}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Link to={'/'}><Button variant="contained">Home</Button ></Link>

        </div>

    );
}

export default TableComponent