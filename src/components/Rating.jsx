import React from 'react'; //ITERATION 6

const Rating = (props) => {
  const { children } = props;

  let coeur;
  if (children < 0.5) {
    coeur = '♡♡♡♡♡';
  } else if (children >= 0.5 && children < 1.5) {
    coeur = '♥︎♡♡♡♡';
  } else if (children >= 1.5 && children < 2.5) {
    coeur = '♥︎♥︎♡♡♡';
  } else if (children >= 2.5 && children < 3.5) {
    coeur = '♥︎♥︎♥︎♡♡';
  } else if (children >= 3.5 && children < 4.5) {
    coeur = '♥︎♥︎♥︎♥︎♡';
  } else if (children >= 4.5) {
    coeur = '♥︎♥︎♥︎♥︎♥︎';
  }

  return <div> Taux de love : {coeur}</div>;
};

export default Rating;

// let starsRating =''; fonctionne pas
//   let starsRating;

//   if (children < 0.5) {
//     starsRating = '☆☆☆☆☆';
//   } else if (children >= 0.5 && children < 1.5) {
//     starsRating = '★☆☆☆☆';
//   } else if (children >= 1.5 && children < 2.5) {
//     starsRating = '★★☆☆☆';
//   } else if (children >= 2.5 && children < 3.5) {
//     starsRating = '★★★☆☆';
//   } else if (children >= 3.5 && children < 4.5) {
//     starsRating = '★★★★☆';
//   } else if (children >= 4.5) {
//     starsRating = '★★★★★';
//   }
