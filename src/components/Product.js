import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import { BsStarFill } from 'react-icons/bs';

function Product({ name, description, price, imageUrl, brand, rating, onAddToCart }) {
  return (
    <Card style={{ width: '13rem' }}>
      <Card.Img
        variant="top"
        src={imageUrl}
        alt={name}
        style={{ maxWidth: '100%', maxHeight: '180px' }}
      />
      <Card.Body>
        <Card.Title>
          {brand} {name}
        </Card.Title>
        <Card.Text>{description}</Card.Text>
        <Container>
          <Row>
            <Col xs={6}>&#8377;{price}</Col>
            <Col xs={6}>
              <BsStarFill /> {rating}
            </Col>
          </Row>
        </Container>
      </Card.Body>
      <Card.Footer className="text-center">
        <Button
          variant="primary"
          onClick={() => onAddToCart({ name, description, price, imageUrl, brand, rating })}
        >
          Add to Cart
        </Button>
      </Card.Footer>
    </Card>
  );
}

export default Product;
