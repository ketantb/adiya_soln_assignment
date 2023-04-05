import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"
// import logo from './logo.svg';
// import './App.css';
import Header from './Components/header';
import Main from './Components/main';
import Footer from './Components/footer';
 
function App()  {
  return (
    <>
     <Header/>
     <Main/>
     <Footer/>
    </>
  );
}
 
export default App;