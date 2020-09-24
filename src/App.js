import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './Components/LoginAndSignUp/Login';



function App() {
  return (
    <BrowserRouter>

      <Route exact path="/">

        <Login />
      </Route>

  

    </BrowserRouter>
  );
}

export default App;
