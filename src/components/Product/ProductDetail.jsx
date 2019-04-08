import React, { Component } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import BreadCrumbComponent from "../atomComponents/BreadCrumbComponent";
import celuDetail from "../../assets/celuDetail.jpg";
import styled from "styled-components";
import PropTypes from "prop-types";

class ProductDetail extends Component {
  render() {
    const product = this.props.product;
    return (
      <Container fluid className="mx-auto ml-5 col-8">
        <BreadCrumbComponent />
        <ProductDetailWrapper>
          <Row>
            <Col xs={6} className="product-img-col ml-3">
              <img
                src={product.pictures[0].url}
                fluid
                alt="imagen del producto"
                className="product-image"
              />
            </Col>
            <Col xs={5} className="custom-mt32 product-info-col">
              <div className="product-status custom-mb16">
                Nuevo - <span>2234</span> vendidos
              </div>
              <div className="product-name custom-mb32">
                <strong>{product.title}</strong>
              </div>
              <div className="product-price custom-mb32">{product.price}</div>
              <Button variant="primary" size="lg">
                Comprar
              </Button>
            </Col>
          </Row>
          <Row>
            <Col xs={7} className="product-desc-col mt-5 custom-ml48 pl-0">
              <div className="desc-title custom-mb32">
                Descripcion del producto
              </div>
              <p className="desc custom-mb32">
                Lorem ipsum dolor sit amet consectetur adipiscing elit
                venenatis, nisi tristique sodales imperdiet fringilla volutpat
                nec odio, parturient nunc blandit netus ultrices nam molestie.
                Natoque fringilla parturient platea dis nullam nisi class, urna
                etiam cum aenean pulvinar vitae orci mi, risus porttitor
                inceptos et nam himenaeos. Bibendum cubilia pharetra duis augue
                fringilla luctus faucibus dictumst vestibulum nec, parturient
                etiam mollis egestas libero porta euismod odio mi sociis,
                himenaeos est quis cursus suscipit senectus risus platea ornare.
              </p>
            </Col>
          </Row>
        </ProductDetailWrapper>
      </Container>
    );
  }
}

ProductDetail.propTypes = {
  product: PropTypes.object.isRequired
};

ProductDetail.defaultProps = {
  product: {}
};

const ProductDetailWrapper = styled.div`
  .product-img-col {
    .product-image {
      width: 96%;
    }
  }

  .product-info-col {
    .product-status {
      font-size: 0.73vw;
    }

    .product-name {
      font-size: 1.25vw;
      font-size: 1.25vw;
      word-wrap: break-word;
      width: 50%;
    }

    .product-price {
      font-size: 2.4vw;
    }

    .btn {
      width: 70%;
      font-size: 1.05vw;
    }
  }

  .product-desc-col {
    .desc-title {
      font-size: 1.46vw;
    }

    .desc {
      font-size: 0.85vw;
    }
  }

  .custom-mb16 {
    margin-bottom: 1rem;
  }

  .custom-mt32 {
    margin-top: 2rem;
  }

  .custom-mb32 {
    margin-bottom: 2rem;
  }

  .custom-ml48 {
    margin-left: 3rem;
  }
`;

export default ProductDetail;
