import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {Greet} from '../wailsjs/go/main/App.js';
import App from './components/App/app.js';
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
  ,
  document.getElementById('root')
);





//For handling inputs from the users. I think it will be great if we follow similar template like below by using Promise. 


// document.querySelector('#app').innerHTML = `
//     <img id="logo" class="logo">
//       <div class="result" id="result">Please enter your name below 👇</div>
//       <div class="input-box" id="input">
//         <input class="input" id="name" type="text" autocomplete="off" />
//         <button class="btn" onclick="greet()">Greet</button>
//       </div>
//     </div>
// `;
// document.getElementById('logo').src = logo;

// let nameElement = document.getElementById("name");
// nameElement.focus();
// let resultElement = document.getElementById("result");

// // Setup the greet function
// window.greet = function () {
//     // Get name
//     let name = nameElement.value;

//     // Check if the input is empty
//     if (name === "") return;

//     // Call App.Greet(name)
//     try {
//         Greet(name)
//             .then((result) => {
//                 // Update result with data back from App.Greet()
//                 resultElement.innerText = result;
//             })
//             .catch((err) => {
//                 console.error(err);
//             });
//     } catch (err) {
//         console.error(err);
//     }
// };
