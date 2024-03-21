import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button, Rating } from '@mui/material';
import * as React from 'react';
import Stack from '@mui/material/Stack';
import { Link } from "react-router-dom";
import Alert from '@mui/material/Alert';


const HotelCard = ({ item, hotelList }) => {

  const newObj = {
    hotelList: hotelList,
    hotelId: item.id
  }
  return (
    <div>
      <Card className='main-cantener'
        variant="outlined"
      >
        <div>
          <CardMedia
            component="img"
            width="100"
            height="250"
            src={item.img}
            sx={{
              borderRadius: '6px',
              width: { xs: '100%', sm: 400 },
            }}
          />
        </div >
        {/* <Box sx={{ alignSelf: 'center', ml: 1, rating: { ml: 600 }, }}> */}
        <div id='cardCenter'>
          <Typography className='hotelName' variant="h3" gutterBottom>
            {item.hotelName}
          </Typography>
          <Typography variant="h4" color="text.secondary" fontWeight="regular">
            {item.address}
          </Typography>
          <Typography variant="h6" color="green" fontWeight="regular">
            {item.text}
          </Typography>
          <Typography variant="h6" color="green" fontWeight="regular">
            {item.pera}
          </Typography>
        </div>
        <div>

        
        <Stack spacing={3}>
          <Rating name="half-rating-read" variant="h2" defaultValue={item.rating} precision={item.rating} readOnly />
        </Stack>
        <Typography variant="h5" color="text.secondary" fontWeight="regular">
          {item.price}
        </Typography>
          {/* <Typography variant="body2" color="text.secondary" fontWeight="regular">
            availability {item.availability}
          </Typography> */}
          {item.availability !== 0 ? (
            <>
              <Typography variant="h5" color="text.secondary" fontWeight="regular">
                availability {item.availability}
              </Typography>
              <Link to={"/form"} state={newObj}>
                <Button variant="contained">Book</Button>
              </Link></>) : (<>
                <Stack sx={{ width: '100%' }} spacing={2}>
                  <Alert severity="error">Not Availability The room  </Alert>
                </Stack>
                <Button variant="contained" disabled>
                  Disabled
                </Button>
              </>
          )}
        </div>
      </Card>
    </div >
  )
}
export default HotelCard