import React from "react";



function getRandomArbitrary({max, min}) {
    return Math.floor (Math.random() * (max - min) + min);
  }

const Random = props =>{
    return(
        <p>random value between {props.min} and{props.max} : {getRandomArbitrary(props)} </p>

    )
}

export default Random

// "props" is a placeholder 