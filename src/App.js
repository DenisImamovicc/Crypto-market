import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import CryptoCurrPice from "./components/Crypto-currency";
import Dropdownmenu from "./components/Dropdown";
import Navigationbar from "./components/Navigationbar";
import Memes from "./components/Memes-section";
import CryptoPosts from "./components/Crypto-posts";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigationbar />
        <Dropdownmenu />
        <Routes>
          <Route  path="/crypto-news" element={<CryptoPosts />}/>
          <Route  path="/crypto-price" element={<CryptoCurrPice />}/>
          <Route  path="/Memes-section" element={<Memes />}/>
        </Routes >
      </div>
    </Router>
  );
}

export default App;