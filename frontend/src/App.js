import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"
// import logo from './logo.svg';
// import './App.css';
import Header from './Components/header';
import Main from './Components/main';
import Footer from './Components/footer';
import Header1 from './Components/header1';
import Card from './card';
import FAQ from './Components/faq';
 
function App()  {
  return (
    <>
     <Header1/>
     <Main/>
     <Footer/>
    </>
  );
}
 
export default App;