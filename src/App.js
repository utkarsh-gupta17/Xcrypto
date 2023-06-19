import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./component/Header.jsx";
import Home from "./component/Home.jsx";
import Coins from "./component/Coins.jsx";
import Exchanges from "./component/Exchanges.jsx";
import CoinDetails from "./component/CoinDetails.jsx";
import Footer from './component/Footer.jsx';


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/coins" element={<Coins/>}/>
        <Route path="/exchanges" element={<Exchanges/>}/>
        <Route path="/coin/:id" element={<CoinDetails/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
