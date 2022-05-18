import React from 'react'; // ITERATION 4
import rgbToHex from '../helpers/rgbToHex';
//import getContrast from '../helpers/getContrast';

const BoxColor = (props) => {
  const { r, g, b } = props;

  //const color = `rgb(${r}, ${g}, ${b})`;

  // HELPERS
  const hexColor = rgbToHex(r, g, b);
  //const fontColor = getContrast(r, g, b);

  const divStyle = {
    //backgroundColor: color,
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
    height: 120,
    width: 400,
    border: '2px dotted black',
    marginBottom: '5px',
    // color: 'green',
  };

  // if (fontColor === 'white') divStyle.color = 'white';
  // else divStyle.color = 'black';

  return (
    <div className="boxColor" style={divStyle}>
      <p>
        rgb({r}, {g}, {b})
      </p>
      <p>{hexColor}</p>
      HELLO WORLD
    </div>
  );
};

export default BoxColor;

// <div
//   className="boxColor"
//   style={{

//   }}
// ></div>

// const divStyle = {
//     color: 'blue',
//     backgroundImage: 'url(' + imgUrl + ')',
//   };

//   function HelloWorldComponent() {
//     return <div style={divStyle}>Hello World!</div>;
//   }
/* 

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

alert(rgbToHex(0, 51, 255)); // #0033ff

*/

// const divStyle = {
//   // backgroundColor: 'rgb({props.r,props.g, props.b})', // NO
//   //backgroundColor: 'red', // OK
//   backgroundColor : `rgb(${props.r},${props.g},${props.b})`,
//   // because props are not define !
//   height: 400,
//   width: 400,
// };
// const divStyle = {
//     backgroundColor : 'rgb({r},{g},{b})',
//     height : 400,
//     width : 400,
// };
