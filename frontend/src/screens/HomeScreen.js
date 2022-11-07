import React, {Fragment, useEffect} from 'react';
import {Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {listProducts} from '../actions/productActions';
import Product from '../components/Product';
import Loader from '../components/Loader';
import Message from '../components/Message';
// import products from '../data/products';



const HomeScreen = () => {
  const dispatch = useDispatch();
  let {products, loading, error} = useSelector(state => state.productList);

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  
  return (
    <Fragment>
      <Row>
        <h1>Latest Products</h1>
        {
          loading ? (<Loader />):(
            error ? (<Message>{error}</Message>): (
              products.map(product => {
                return (
                  <Col sm={12} md={6} lg={4} xl={3} className="mb-3" key={product._id}>
                    <Product key={product._id} product={product} />
                  </Col>
                )
              })
            )
          )

        
      }
      </Row>

    </Fragment>
  )
  

}

export default HomeScreen