import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Product from "./Product";
import BreadCrumbComponent from "../atomComponents/BreadCrumbComponent";
import PropTypes from "prop-types";

class ProductList extends Component {
  render() {
    const productList =
      this.props.location.state && this.props.location.state.productList
        ? this.props.location.state.productList
        : [];
    return (
      <Container fluid className="mx-auto ml-5 col-8">
        <BreadCrumbComponent />
        {productList.length > 0 &&
          productList.map(product => {
            return (
              <Product className="ml-3" product={product} key={product.id} />
            );
          })}
      </Container>
    );
  }
}

ProductList.propTypes = {
  productList: PropTypes.array.isRequired
};

ProductList.defaultProps = {
  productList: []
};

export default ProductList;
