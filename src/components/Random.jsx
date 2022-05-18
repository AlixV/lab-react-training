import React from 'react';

const Random = (props) => {
  function getRandomArbitrary({ max, min }) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  return (
    <p
      style={{
        height: 30,
        width: 300,
        border: '2px solid blue',
        paddingTop: '5px',
        marginBottom: '5px',
      }}
    >
      Random value between {props.min} and {props.max} :{' '}
      {getRandomArbitrary(props)}{' '}
    </p> // Pq moustaches et quotes ?
  );
};

export default Random;

// Possible sans fonction supplémentaire :

// const Random = (props) => {
//     const { min, max } = props;
//     return (
//       <div>
//         <p>
//           Random value between {min} and {max} {'=>'}{' '}
//           {Math.floor(Math.random() * (max - min) + min)}
//         </p>
//       </div>
//     );
//   };
