import React from "react";

const Greetings = (props) =>{
    
    let salutation ="";

    switch(props.lang){
        case "de" :
            salutation = "Hallo";
            break;
        case "es" :
            salutation =  "Ola";
            break;
        case "fr" :
            salutation =  "Bonjour";
            break;
        default :
            salutation = "Hello";
            break ;
    }
    

    return(
        <div className="grettings">
        <p>{salutation} {props.children}</p>

    
        </div>
    )
}





export default Greetings

// Create a Greetings component with 2 props:

// lang: A string that can have values: "de", "en", "es" or "fr"
// children: A text
// The component should display a greeting text in the chosen language.

// Example:

// <Greetings lang="de">Ludwig</Greetings>
// <Greetings lang="fr">François</Greetings>