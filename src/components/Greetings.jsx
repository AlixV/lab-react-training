import React from 'react';

const Greetings = (props) => {
  let salutation = '';
  switch (
    props.lang // Pas de déconstruction des props
  ) {
    case 'de':
      salutation = 'Hallo';
      break;
    case 'es':
      salutation = 'Ola';
      break;
    case 'fr':
      salutation = 'Bonjour';
      break;
    default:
      salutation = 'Hello';
      break;
  }
  // Coder la logic avant/hors le return
  return (
    <div
      className="grettings"
      style={{
        height: 50,
        width: 400,
        border: '2px solid green',
        marginBottom: '5px',
      }}
    >
      <p>
        <strong>
          {salutation} {props.children}
        </strong>
      </p>
      {/* children : ce qu'il y a écrit entre tags en dur */}
    </div>
  );
};

export default Greetings;

// OTHER WAY :
// const Greetings = (props) => {
//     const { lang, children } = props;

//     const translator = {
//       de: 'Hallo',
//       en: 'Hello',
//       es: 'Hola',
//       fr: 'Bonjour',
//     };

//     return (
//       <div>
//         <p>
//           // {lang === 'fr' ? 'Bonjour' : 'Hallo'} {children}
//           {translator[lang]} {children}
//         </p>
//       </div>
//     );
//   };

// import React from "react"
// const Greetings = (props) =>{
//     let salutation ="";
//     switch(props.lang){
//         case "de" :
//             salutation = "Hallo";
//             break;
//         case "es" :
//             salutation = "Ola";
//             break;
//         case "fr" :
//             salutation = "Bonjour";
//             break;
//         default :
//             salutation = "Hello"
//             break;
//     }
//     return(
//         <div className="grettings">
//             <p> {salutations}{props.children}</p>
//         </div>
//     )

// }
// export default Greetings

// Create a Greetings component with 2 props:
// lang: A string that can have values: "de", "en", "es" or "fr"
// children: A text
// The component should display a greeting text in the chosen language.

// Example:

// <Greetings lang="de">Ludwig</Greetings>
// <Greetings lang="fr">François</Greetings>
