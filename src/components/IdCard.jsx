import React from "react";

const IdCard = (props) =>{
  const {lastName, firstName, gender, height, birth, picture } = props;
    return (
        <div className = "idCard">
            <p>lastName:{lastName} </p>
            <p>firstName: {firstName}</p>
            <p>gender: {gender}</p>
            <p>height:{height}</p>
            <p>birth:{birth}</p>
            <div>
                <img src ={picture} alt={lastName}/>
            </div>
            {/* si pas de const props.lastName */ }

           
        </div>
    )
}

export default IdCard



