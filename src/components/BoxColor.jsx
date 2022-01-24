import React from "react";

const divStyle = {
        backgroundColor : 'rgb({props.r,props.g, props.b})', //non
        // backgroundColor : 'red', OK
        height : 400,
        width : 400,
    };


const BoxColor = (props) => {

    // const {r, g, b} = props;
    // const divStyle = {
    //     backgroundColor : 'rgb({r},{g},{b})',
    //     height : 400,
    //     width : 400,
    // };
    
      return (
        <div className="boxColor" style={divStyle}>

        HELLO WORLD

            {/* <div style ={{
                backgroundColor : rgb({r},{g},{b}),
                height : 400,
                width : 400,
   
            }}>
                HELLO WORLD
            </div>       */}

        </div>
      )
  }

export default BoxColor

// const divStyle = {
//     color: 'blue',
//     backgroundImage: 'url(' + imgUrl + ')',
//   };
  
//   function HelloWorldComponent() {
//     return <div style={divStyle}>Hello World!</div>;
//   }