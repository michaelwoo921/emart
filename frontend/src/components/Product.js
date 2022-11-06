import React from 'react';
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom';
import Rating from './Rating';

const Product = ({product}) => {
  return (
    <Card variant='flush'>
        <Link to={`/product/${product._id}`}><Card.Img variant="top" src={product.image} />
        </Link>
    
    <Card.Body>
    <Link to={`/product/${product._id}`}>
    <Card.Title>{product.name}</Card.Title>
    </Link>

      <Card.Text>
        <Rating rating={product.rating}/>  stars from {product.numReviews} reviews
      </Card.Text>
      <Card.Text>
        ${product.price}
      </Card.Text>
    </Card.Body>
  </Card>
  )
}

export default Product