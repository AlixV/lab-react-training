import React from 'react';

const IdCard = (props) => {
  // const avec nom du component. Puis destructuration props.
  const { lastName, firstName, gender, height, birth, picture } = props;
  return (
    <div
      className="idCard"
      style={{
        height: 325,
        width: 800,
        border: '2px solid orange',
        marginBottom: '10px',
        paddingTop: '15px',
      }}
    >
      <img src={picture} alt={lastName} />

      <div className="infoId">
        <p>
          <strong>First name :</strong>
          {firstName}
        </p>
        <p>
          <strong>Last name : </strong>
          {lastName}
        </p>
        <p>
          <strong>Gender : </strong>
          {gender}
        </p>
        <p>
          <strong>Height :</strong>
          {height}
        </p>
        <p>
          <strong>Birth :</strong>
          {birth.toString()}
        </p>
      </div>
    </div>
  );
};

export default IdCard;

/* REFAIT POUR ME SOUVENIR 


import React from "react"    <== IMPORTER REACT 

const IdCard = (props)=>{    <== LA FONCTION DU COMPONENT
   Les PROPS, ce qui vient par App.js 
   La DÉSTRUCTURATION des props :
    const{lastName, firstName, gender, height, birth, picture}= props;
    return(    <== le RETURN

        <div className ="idCard">   <== La DIV qui englobe tout

        <p>lastName:{lastName} </p> le {Javascript}
        <p>firstName:{firstName}</p>
        <p>gender:{gender}</p>
        <p>height:{height}</p>
        <p>birth:{birth}</p>

        <div>
            <img src ={picture} alt={lastName}></img>
        </div>

        </div>

    )
}
EXPORTER LE COMPONENT !
export default IdCard
*/

/*
    <div className="idCard">
      <p>lastName:{lastName} </p>
      <p>firstName: {firstName}</p>
      <p>gender: {gender}</p>
      <p>height:{height}</p>
      <p>birth:{birth}</p>
      <div>
        <img src={picture} alt={lastName} />
      </div>
      si pas de const props.lastName 
    */
