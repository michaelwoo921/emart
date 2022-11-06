import React, {Fragment} from 'react';
import {Container} from 'react-bootstrap'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';

function App() {
  return (
    <Fragment>
      <Router>
        <Header />
        <main>
          <Container>
            <Routes>
              <Route path="/" element={<HomeScreen/>}/>
              <Route path="/login" element={<LoginScreen/>}/>
              <Route path="/cart" element={<CartScreen/>}/>
            </Routes>
        </Container>
        </main>
        <Footer/>
      </Router>
      
      
      
    </Fragment>
  );
}

export default App;
