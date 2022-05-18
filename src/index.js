import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

/* 
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // ./ Ceci au au même niveau que moi cad dans src folder
import App from './App';  // Pourquoi pas .js ?

ReactDOM.render(  // de l'import ReactDOM
<React.StrictMode>
<App/>
</React.stricMode>
document.getElementById('root') on peut voir root dans index.html
);

*/
