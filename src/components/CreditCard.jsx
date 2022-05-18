import React from 'react'; // ITERATION 5
import Visa from './../assets/images/visa.png';
import MasterCard from './../assets/images/master-card.svg';
import './../style/creditCard.css';

const CreditCard = (props) => {
  //let logoCard = '';
  const {
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color,
  } = props;

  let imgSrc = '';
  if (type === 'Visa') imgSrc = Visa;
  else if (type === 'Master Card') imgSrc = MasterCard;
  // else("no logo")

  let cardNumber = `${'•••• •••• •••• '}` + number.slice(-4);

  let month = expirationMonth;
  if (month <= 9) month = '0' + month;

  return (
    <div
      className="credit-card-box"
      style={{
        width: 270,
        borderRadius: '7%',
        padding: 5,

        margin: 10,
        height: 140,

        backgroundColor: bgColor,
        color: color,
      }}
    >
      <img
        className="credit-card-img"
        style={{
          height: 20,
          width: 60,
        }}
        src={imgSrc}
        alt={type}
      />

      <div className="credit-card-nb">
        <p>{cardNumber}</p>
      </div>

      <div className="credit-card-details">
        <div className="credit-card-date-bank">
          <p>
            Expires {month}/{expirationYear} {bank}
          </p>
          {/* <p>{bank}</p> */}
        </div>
        <p>{owner}</p>
      </div>
    </div>
  );
};

export default CreditCard;
/*
1) afficher logo en fonction du type. seulement 2 choix
Donc voir en cas de souci 
2) Number : 
- Espace tous les 4 chiffres, 
- Display only the 4 last digits 
3) afficher expiration
4) Display bank
5) Display owner
6) Font color  en fonction contrast

Iteration 5 | Component: CreditCard

Create a CreditCard component that displays a rectangle 
with the information coming from the props.

The component should take 8 props:

type: A string that can be "Visa" or "Master Card"

number: A string that is the number of the credit card. 
For security, you should only display the 4 last digits

expirationMonth: A number that represents the month, 
between 1 and 12

expirationYear: A number that represents the year

bank: A string that represents the name of the bank

owner: A string that represents the name of the owner

bgColor: A string for the background color of the card

color: A string for the text color of the card

Take your time to make the component look as close 
to the expected output as possible. You'll probably want to use flexbox.



*/
