import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Bookingdetails from './Bookingdetails';
import { useNavigate } from 'react-router-dom';

const Bookings = () => {
    const {user}= useContext(AuthContext);
    const [bookings, setBookings]=useState([]);
    const navigate = useNavigate();

    const url = `http://localhost:5000/bookings?email=${user?.email}`;
  console.log(bookings)
    useEffect(()=>{
        fetch(url, {
          method:'GET',
          headers:{
            authorization: `Bearer ${localStorage.getItem('car-access-token')}`
          }
        })
        .then(res=>res.json())
        .then(data => {
          if(!data.error){
            setBookings(data)
          }
          else{
            navigate('/')
          }
          
        })
    },[])

    const handleDelete =(id)=>{
      const proceed = confirm("Are sure you want to delete")
      if(proceed){
        fetch(`http://localhost:5000/bookings/${id}`,{
          method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
          // console.log(data)
          if(data.deletedCount >0){
            alert("deleted successful")
            const remaining = bookings.filter(booking=>booking._id !== id);
            setBookings(remaining)
          }
        })
      }
  }


  const handleBookingConfirm = id =>{
    fetch(`http://localhost:5000/bookings/${id}`,{
      method :"PATCH",
      headers:{
        "content-type": 'application/json'
      },
      bosy:JSON.stringify({status:'confirm'})
    })
    .then(res=> res.json())
    .then(data=>{
      // console.log(data);
      if(data.modifiedCount>0){
          const remaining = bookings.filter(booking =>booking._id !==id);
          const updated = bookings.find(booking=>booking._id===id);
          updated.status = "confirm";
          // console.log(updated);
          const newBookings = [updated, ...remaining];
          setBookings(newBookings);
      }
    })
  }
    return (
        <div>
            <h2>your Bookings{bookings.length}</h2>
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
    
        {
            bookings.map(booking=> <Bookingdetails key={booking._id} booking={booking} handleDelete={handleDelete} handleBookingConfirm={handleBookingConfirm} ></Bookingdetails> )
        }
    </tbody>
    
    
  </table>
</div>
        </div>
    );
};

export default Bookings;