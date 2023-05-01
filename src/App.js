import React from 'react'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import './App.css';
import { Container } from 'react-bootstrap';
import Home from './components/pages/Home/Home';
import StartCreating from './components/pages/StartCreating/StartCreating';
import OutputImages from './components/pages/StartCreating/OutputImages/OutputImages';
import Header from './components/Header/Header';

function App() {
  return (
    <BrowserRouter> 
     <Container fluid style={{padding:0}}>
    <div className="App">
    <Header />
    <Routes>
        <Route path="/" element={ <Home /> } />
        {/* <Route  path="startcreating" element={<StartCreating />}>
          <Route path="outputimages" element={<OutputImages />} />
        </Route> */}
        <Route path="startcreating" element={ <StartCreating/> } />
        <Route path="outputimages" element={ <OutputImages /> } />
        {/* <Route path="login" element={ <Login /> } /> */}
       
    </Routes>    
    </div>
    </Container>
    </BrowserRouter>
      
  );
}

export default App;
