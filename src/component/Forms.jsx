import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { useLocation, useNavigate } from "react-router-dom";
import '../CSS/form.css';
const Forms = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const hotelList = location.state.hotelList
    const hotelId = location.state.hotelId
    console.log(hotelList);
    console.log(hotelId);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        room: '',
        checkin: '',
        checkout: ''
    });
    const handleChange = (event) => {
        const { id, value } = event.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target
        if (form.checkValidity()) {
            console.log("valid")
            let updateData = {}
            hotelList.forEach(element => {
                if (element.id === hotelId) {
                    element.availability -= formData.room
                    updateData = { ...element }
                }
            });
            fetch(`http://localhost:3001/Data/${parseInt(hotelId)}`, {
                method: "PUT",
                headers: {
                    'Content-type': "application/json"
                },
                body: JSON.stringify(updateData)
            })
            navigate('/TableComponent', { state: formData })
        }
    };

    return (
        <>
            <nav className='nav-bar'>
                <h1>Booking.com</h1>
            </nav>

            <div className='form-container'>
                <Typography variant="h4" component="h2">
                    Name: {location.state.hotelName}
                </Typography>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 4, width: '25ch' },
                    }}
                    onSubmit={handleSubmit}
                >
                    <div className='input-container'>
                        <div>
                            <TextField
                                label="First Name"
                                id="firstName"
                                size="small"
                                onChange={handleChange}
                                required
                            />
                            <TextField
                                label="Last Name"
                                id="lastName"
                                size="small"
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <TextField
                                label="Phone Number"
                                id="phoneNumber"
                                type="number"
                                size="small"
                                onChange={handleChange}
                                required
                            />
                            <TextField
                                label="Email"
                                id="email"
                                size="small"
                                type="email"
                                onChange={handleChange}
                                required
                            />
                            <TextField
                                id="room"
                                label="Room"
                                type="number"
                                size="small"
                                onChange={handleChange}
                                required
                            />
                            <TextField
                                id="address"
                                label="address"
                                type="text"
                                size="small"
                                onChange={handleChange}
                                required
                            />
                            <div className='calender'>
                                <TextField
                                    id="checkin"
                                    label="date"
                                    type="date"
                                    size="small"
                                    onChange={handleChange}
                                    required
                                />
                                <TextField
                                    id="checkout"
                                    label="date"
                                    type="date"
                                    size="small"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className='button'>
                            <Button variant="contained" type='submit'>Submit</Button>
                        </div>
                    </div>
                </Box>
            </div>
        </>
    );
};

export default Forms;