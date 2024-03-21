import { useEffect, useState } from 'react'
import './App.css';
import HotelCard from './component/HotelCard';

function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('http://localhost:3001/Data')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log(data)
        return setData(data)
      })
  },[])
  return (
    <>
      <nav className='nav-bar'>
        <h1>Booking.com</h1>
      </nav>
      {
        data.map((item, index) => (
          <HotelCard item={item} key={index} hotelList={data} />
        ))
      }
    </>
  )
}


export default App