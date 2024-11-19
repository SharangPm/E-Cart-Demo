

// Updated third code: Home component
import React, { useEffect } from 'react';
import { Button, Card, Col, Row, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../Redux/slice/productSlice';
import Header from '../Components/Header'
function Home() {
  const dispatch = useDispatch();
  const { allProducts, loading, error } = useSelector(state => state.products); // Updated 'productReducer' to 'products'

  useEffect(() => {
    dispatch(fetchProducts());
  }, []); // Added 'dispatch' as a dependency

  return (
    <>
    <Header insideHome/>
    <div style={{ marginTop: "50px" }} className='container-fluid'>
      {
        loading ? <div className="text-center mt-5">
          <Spinner animation="border" variant="primary" />
        </div> :
        <Row>
          {allProducts?.length > 0 ? allProducts.map(product => (
            <Col key={product.id}> {/* Added 'key' prop */}
              <Card style={{ width: '18rem' }} className='mt-4'>
                <Link to={`/view/${product?.id}`}><Card.Img variant="top" width={"100%"} src={product?.thumbnail} />
                </Link>
                <Card.Body>
                  <Card.Title className='text-danger'>{product?.title.slice(0, 10)}...</Card.Title>
                  <Card.Text>
                    {product?.description.slice(0, 20)}... {/* Corrected 'discription' to 'description' */}
                  </Card.Text>
                  <div className="d-flex justify-content-between">
                    <Button className='btn btn-light'><i className="fa-solid fa-heart text-danger"></i></Button>
                    <Button className='btn btn-light'><i className="fa-solid fa-cart-shopping text-warning"></i></Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          )) : <p className='text-danger'>Nothing to display</p>}
        </Row>
      }
    </div>

    </>
  );
}

export default Home;
