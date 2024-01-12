// BookedTours.jsx
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { HiOutlineClipboardCheck, HiOutlineLocationMarker } from 'react-icons/hi';

const BookedTours = () => {
  const history = useHistory();
  const [bookedTours, setBookedTours] = useState([]);
  const user = JSON.parse(localStorage.getItem('userInfo'));

  useEffect(() => {
    if (user && user.user_id) {
      fetch(`/booked-tours?user_id=${user.user_id}`) // Replace with your backend URL
        .then((response) => {
          if (!response.ok) {
            throw new Error('Failed to fetch booked tours');
          }
          return response.json();
        })
        .then((data) => {
          setBookedTours(data.bookedTours);
        })
        .catch((error) => console.error('Error fetching booked tours:', error));
    } else {
      // Handle the case when user or user.userId is not available
      console.error('User information not available');
    }
  }, [user]);

  const arrayBufferToBase64 = (buffer) => {
    const binary = Array.from(new Uint8Array(buffer))
      .map((byte) => String.fromCharCode(byte))
      .join('');
    return btoa(binary);
  };

  const handleBookNowClick = (tour_id) => {
    if (user) {
      history.push(`/booking-details?tour_id=${tour_id}`);
    } else {
      localStorage.setItem('intendedUrl', `/booking-details?tour_id=${tour_id}`);
      history.push('/login');
    }
  };

  return (
    <div>
      <h1>Booked Tours</h1>
      <div className="bookedToursList">
        {bookedTours.map(({ tour_id, image, category, hotel_id, description, Tagline, maximum_occupancy, Price, Duration, Starting_date, Ending_date }) => {
          const imageUrl = `data:image/jpeg;base64,${arrayBufferToBase64(image.data)}`;
          return (
            <div key={tour_id} className="singleDestination">
              <div className="imageDiv">
                <img src={imageUrl} alt={image.data} />
              </div>

              <div className="cardInfo">
                <h4 className="destTitle">{category}</h4>
                <div className="continent">
                  <HiOutlineLocationMarker className="icon" />
                  <span className="name">{hotel_id}</span>
                </div>

                <div className="desc">
                  <p>{description}</p>
                  <p>{Tagline}</p>
                  <p>Maximum Occupancy: {maximum_occupancy}</p>
                  <p>Price per person: {Price}</p>
                  <p>Duration: {Duration}</p>
                  <p>Starting Date: {Starting_date}</p>
                  <p>Ending Date: {Ending_date}</p>
                </div>

                <button className="btn flex" onClick={() => handleBookNowClick(tour_id)}>
                  BOOK NOW
                  <HiOutlineClipboardCheck className="icon" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BookedTours;
