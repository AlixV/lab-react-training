import React from 'react';

const DriverCard = (props) => {
  const { name, rating, img, car } = props;

  let stars;
  if (rating < 0.5) {
    stars = '♡♡♡♡♡';
  } else if (rating >= 0.5 && rating < 1.5) {
    stars = '♥︎♡♡♡♡';
  } else if (rating >= 1.5 && rating < 2.5) {
    stars = '♥︎♥︎♡♡♡';
  } else if (rating >= 2.5 && rating < 3.5) {
    stars = '♥︎♥︎♥︎♡♡';
  } else if (rating >= 3.5 && rating < 4.5) {
    stars = '♥︎♥︎♥︎♥︎♡';
  } else if (rating >= 4.5) {
    stars = '♥︎♥︎♥︎♥︎♥︎';
  }
  return (
    <div
      style={{
        height: 200,
        width: 700,
        backgroundColor: 'blue',
        color: 'white',
        margin: 10,
        padding: 10,
      }}
    >
      <img
        style={{
          height: 70,
          width: 70,
          borderRadius: '50%',
        }}
        src={img}
        alt={name}
      />
      <p>{name}</p>
      <p>{stars}</p>
      <p>
        {car.model} - {car.licensePlate}
      </p>
    </div>
  );
};

export default DriverCard;
