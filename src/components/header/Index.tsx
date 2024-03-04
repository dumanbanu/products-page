import React, { useEffect, useState } from 'react';
import "./style.css";
import { useContext } from 'react';
import { ProductsContext } from '../../context/productsContext';
import { useNavigate } from "react-router-dom"
import { searchProductsUsingGet } from '../../api/services/productService';
import { Button, Col, Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { faClock } from '@fortawesome/free-solid-svg-icons';



export default function Index() {

  const navigater = useNavigate()
  const { totalPrice, setFilterObject, filterObject, setProductList } = useContext(ProductsContext)

  const [searchInputData, setSearchInputData] = useState<string | null>();

  const searchButtonClickEventHandler = () => {
    setFilterObject(prevState => {
      return { ...prevState, name: searchInputData };
    });
  }

  useEffect(() => {
    if (filterObject.name) {
      searchProductsUsingGet(filterObject).then(data => {
        setProductList(data);
      });
    }
  }, [filterObject, setProductList]);

  return (
    <Container fluid className="bg-primary py-2">
      <Row className="justify-content-center">
        <Col xs={10} md={8} xl={10}>
          <Row>
            <Col xs={4} md={2} className="d-flex align-items-center">
              <div className="logo" onClick={() => navigater("/")}>Eteration</div>
            </Col>
            <Col xs={4} md={3} className="d-flex align-items-center">
              <div className="search-container">
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search"
                  value={searchInputData}
                  onChange={(e) => setSearchInputData(e.target.value)}
                />
                <button className="search-button" onClick={searchButtonClickEventHandler}>
                  <i className="fas fa-search"></i>
                </button>

              </div>

            </Col>
            <Col xs={4} md={6} className="d-flex align-items-center justify-content-end">
              <div className="user-info">
                <span className="cart-info me-2"> <i className="fas fa-briefcase "></i>{totalPrice} ₺</span>
                <span className="user-name" > <i className="fas fa-user "></i>Banu</span>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );

}
