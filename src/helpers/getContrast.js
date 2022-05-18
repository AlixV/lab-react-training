// change font color based on luminance // source : https://stackoverflow.com/questions/11867545/change-text-color-based-on-brightness-of-the-covered-background-area

function getContrast(r, g, b) {
  // http://www.w3.org/TR/AERT#color-contrast

  const brightness = Math.round(
    (parseInt(r) * 299 + parseInt(g) * 587 + parseInt(b) * 114) / 1000
  );

  const textColour = brightness > 125 ? 'black' : 'white';
  return textColour;
}

export default getContrast;

// Checkpoint 2.2 - Ensure that foreground and background color combinations provide sufficient contrast when viewed by someone having color deficits or when viewed on a black and white screen
// Technique 2.2.1 [priority 3] Test the color attributes of the following elements for visibility

// function BoxColor(props) {
//   const { r, g, b } = props;

//   const color = `rgb(${r}, ${g}, ${b})`;

//   const hexColor = rgbToHex(r, g, b);
//   const fontColor = getContrast(r, g, b);

//   const divStyle = {
//     backgroundColor: color,
//   };

//   if (fontColor === 'white') divStyle.color = 'white';
//   else divStyle.color = 'black';

//   return (
//     <div style={divStyle}>
//       <p>{color}</p>
//       <p>{hexColor}</p>
//     </div>
//   );
// }
