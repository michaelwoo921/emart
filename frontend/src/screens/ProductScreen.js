import React, {Fragment, useState, useEffect} from 'react';
import {Link, useNavigate, useParams} from 'react-router-dom'
import {Row, Col, Card, ListGroup, Image, Button, Form} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import { listProductDetails } from '../actions/productActions';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Rating from '../components/Rating';
// import products from '../data/products';

const ProductScreen = () => {
    const params = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [qty, setQty] =useState(1);
 
    const {product, loading, error} = useSelector(state => state.productDetails);
    useEffect(() => {
        dispatch(listProductDetails(params.id));
    }, [dispatch, params]);



    const addToCartHandler = () => {
        // add to cart
        console.log(product, qty)
        navigate(`/cart/${product._id}?qty=${qty}`)
    }
  return (
    <Fragment>
        <Link to="/" className="btn btn-light my-3" >
            Go Back
        </Link>
        {loading? (<Loader />) : (
            error ? (<Message variant="danger">{error}</Message>):(
                <Fragment>
                <Row>
                        {/* Image */}
                   
                    <Col md={6}>
                        <Image  src={product.image}/>


                    </Col>
                    {/* Description */}
                    <Col md={3}>
                        <ListGroup>
                            <ListGroup.Item>
                                <h3> {product.name} </h3>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Rating rating={product.rating}/> stars from {product.numReviews} reviews
                            </ListGroup.Item>
                            <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
                            <ListGroup.Item>
                                {product.description}
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>

        
                    <Col md={3}>
                        <Card>
                            <ListGroup>
                                <ListGroup.Item>
                                    <Row>
                                        <Col> Price: </Col>
                                        <Col>${product.price}</Col>
                                    </Row>   
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Status: </Col>
                                        <Col>${product.countInStock>0 ? ('In Stock'): ('Out of Stock')}</Col>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Row>
                                        <Col> Qty:</Col>
                                        <Col>
                                        <Form.Select value={qty} 
                                            onChange={e => setQty(e.target.value)}
                                        >
                                        {
                                            [...Array(product.countInStock).keys()].map(x => (
                                                <option value={x+1} key={x+1}> {x+1}</option>
                                            ))
                                        }
                                       
                                        </Form.Select>
                                        </Col>
                                    </Row>    
                                </ListGroup.Item>
                                <ListGroup.Item>

                                    <div className="d-grid gap-2">
                                    <Button variant="dark"
                                        onClick={addToCartHandler}
                                        disabled ={product.countInStock === 0}
                                    >
                                        Add to cart
                                    </Button>
                                    </div>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <h2> Reviews</h2>

                    </Col>
                </Row>
            </Fragment>
            )
        )}
      

    </Fragment>
  )
}

export default ProductScreen