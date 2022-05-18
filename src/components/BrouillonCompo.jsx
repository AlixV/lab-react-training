import React from 'react';

const BrouillonCompo = (props) => {
  // const writers = ['Nothomb','Marguerite Mitchel', 'Marguerite Yourcenar']
  const { props1, props2, props3, props4 } = props;
  return (
    <div className="brouillon">
      <p>Props number 1 = {props1}</p>
      <p>Props number 2 = {props2} </p>
      <p>Props number 3 = {props3} </p>
      <p>Props number 4 = {props4} </p>

      {/* {writers.map((writerName)=>(

      ))} */}
    </div>
  );
};

export default BrouillonCompo;
