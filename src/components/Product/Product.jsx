import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";
import styled from "styled-components";
import PropTypes from "prop-types";
import shipping from "../../assets/ic_shipping.png";
import { withRouter } from "react-router-dom";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProduct: {}
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    fetch(`/api/item/${encodeURIComponent(this.props.product.id)}`)
      .then(response => response.json())
      .then(selectedProduct => {
        this.setState({ selectedProduct: selectedProduct }, () => {
          const redirectUrl = "/item/" + this.props.product.id;
          let { history } = this.props;
          history.push(redirectUrl, { product: this.state.selectedProduct });
        });
        console.log(this.state.selectedProduct);
      });
  }

  render() {
    const product = this.props.product;

    return (
      <ProductWrapper className="mt-3 mb-3">
        <Row>
          <Col xs={2} className="pl-0 pr-0">
            <Button onClick={this.handleClick}>
              <img
                src={product.thumbnail}
                alt="imagen del producto"
                className="product-image w-90 img-fluid"
              />
            </Button>
          </Col>
          <Col xs={8}>
            <Row>
              <Col xs={3} className="custom-mb">
                <div className="product-price d-inline mr-3">
                  {product.price}
                </div>
                <span>
                  <img src={shipping} alt="entrega" className="img-fluid" />
                </span>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <div className="product-heading">{product.title}</div>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <div className="product-heading">{product.subtitle}</div>
              </Col>
            </Row>
          </Col>
          <Col xs={2}>
            <span className="product-location">
              {product.seller_address.state.name}
            </span>
          </Col>
        </Row>
      </ProductWrapper>
    );
  }
}

Product.propTypes = {
  product: PropTypes.object.isRequired
};

Product.defaultProps = {
  product: {}
};

const ProductWrapper = styled.div`
  margin-left: 2rem;

  .product-image {
    border-radius: 4px;
  }

  .product-price {
    font-size: 1.25vw;
  }

  .custom-mb {
    margin-bottom: 2rem;
  }

  .product-heading {
    font-size: 0.95vw;
  }

  .product-location {
    font-size: 0.64vw;
  }
`;

export default withRouter(Product);
