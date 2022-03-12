import React from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Product from './components/Products';
import Home from "./pages";
import SigninPage from './pages/signin';


function App()
{
  return (
    <>
    <BrowserRouter>
         <Switch>
           <Route path="" component={Home} exact />
           <Route path="signin" component={SigninPage} exact />
           <Route path="product" component={Product} exact />
          </Switch> 
    </BrowserRouter>
    </>
  );
}

export default App;
