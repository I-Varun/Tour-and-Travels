// import React from 'react';
// import { Route, Switch } from 'react-router-dom';
// import Main from '../Main/Main';
// import BookingDetails from './BookingDetails';
// import PaymentOptions from '../Payment/PaymentOptions';

// const BookingPage = () => {
//   return (
//     <Switch>
//       <Route path="/booking-details" component={BookingDetails} />
//       <Route path="/payment" component={PaymentOptions} />
//       <Route path="/" component={Main} />
//     </Switch>
//   );
// };

// export default BookingPage;
import React from 'react'
import { Switch,Route } from 'react-router-dom'
import Hoteldetails from './Hoteldetails.js'
import HotelBookingDetails from './HotelBookingDetails.jsx'
import PaymentOptions from '../Payment/PaymentOptions.jsx'


const HotelBookingPage = () => {
  return (
    <Switch>
      <Route path="/hotelbooking-details" component={HotelBookingDetails} />
       <Route path="/payment" component={PaymentOptions} />
      <Route path="/" component={Hoteldetails} />
     </Switch>
  )
}

export default HotelBookingPage