import React, {Fragment} from 'react';
import {Container} from 'react-bootstrap'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProductScreen from './screens/ProductScreen';

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
              <Route path="/register" element={<RegisterScreen/>}/>
              <Route path="/cart" element={<CartScreen/>}/>
              <Route path="/product/:id" element={<ProductScreen/>}/>
            </Routes>
        </Container>
        </main>
        <Footer/>
      </Router>
      
      
      
    </Fragment>
  );
}

export default App;
