import React, {Fragment} from 'react';
import {Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom';
import Product from '../components/Product';
import products from '../data/products';


const HomeScreen = () => {

  
  return (
    <Fragment>
      <Row>
        <h1>Latest Products</h1>
        {

        products.map(product => {
          return (
            <Col sm={12} md={6} lg={4} xl={3} className="mb-3">
              <Product key={product._id} product={product} />
            </Col>
          )
        })
      }
      </Row>

    </Fragment>
  )
  

}

export default HomeScreen