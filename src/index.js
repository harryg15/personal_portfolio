import React from 'react'  // way for React to understand JSX just like HTML 
import ReactDOM from 'react-dom'  // help connects with html file (helps it show up)

import App from './App';  //imports app component 
import './index.css'; //imports css file

ReactDOM.render(<App />, document.getElementById('root'))  // renders React App component in root file
//this root file is part of the div in index.html
//so effectively you're importing all the react elements of your website in your App.js

//app & document = like saying im going to render "app" WITH wherever 'root' id is on html file