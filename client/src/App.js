import React, { Fragment } from 'react';

import App from './App.css';

const  InputTodo = require( './components/InputTodo');


function App() {
  return (
  <Fragment>
    <div className="container">
      <InputTodo />
    </div>
  </Fragment>
  );
}

export default App;
