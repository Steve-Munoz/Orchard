import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Form from "./components/Form";
import Menu from "./components/Pages/Menu";
import Add from "./components/Pages/Add";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";



function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Route exact path='/' component={Form} />
        <Route exact path='/menu' component={Menu} />
        <Link exact path='/add' component={Add} />
      </Router>
      <Footer />
    </div> 
  )
}

export default App;
