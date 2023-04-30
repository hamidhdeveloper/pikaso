import React from 'react'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import './App.css';
import { Container } from 'react-bootstrap';
import Home from './components/pages/Home/Home';

function App() {
  return (
    <BrowserRouter> 
     <Container fluid style={{padding:0}}>
    <div className="App">
    <Routes>
        <Route path="/" element={ <Home /> } />
        {/* <Route path="login" element={ <Login /> } /> */}
       
    </Routes>    
    </div>
    </Container>
    </BrowserRouter>
      
  );
}

export default App;
