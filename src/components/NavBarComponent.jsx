import React, { Component } from "react";
import logo from "../logo.png";
import searchIcon from "../assets/ic_Search.png";
import {
  Navbar,
  Nav,
  InputGroup,
  FormControl,
  Button,
  Form
} from "react-bootstrap";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

class NavBarComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      productList: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ query: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch(`/api/items?q=${encodeURIComponent(this.state.query)}`)
      .then(response => response.json())
      .then(productList => {
        this.setState(
          { productList: productList.filter((product, idx) => idx < 4) },
          () => {
            const redirectUrl = "/items?search=" + this.state.query;
            let { history } = this.props;
            history.push(redirectUrl, { productList: this.state.productList });
          }
        );
        console.log(this.state.productList);
      });
  }

  render() {
    return (
      <NavBarWrapper>
        <Navbar
          bg="light"
          variant="light"
          sticky="top"
          className="col-8 col-centered"
        >
          <Navbar.Brand className="pt-0">
            <Nav.Link href="/">
              <img
                src={logo}
                className="d-inline-block align-top"
                alt="El Baraton"
              />
            </Nav.Link>
          </Navbar.Brand>
          <Form className="w-100" onSubmit={this.handleSubmit}>
            <InputGroup className="ml-auto mb-2">
              <FormControl
                placeholder="Nunca dejes de buscar"
                aria-label="Nunca dejes de buscar"
                aria-describedby="basic-addon2"
                onChange={this.handleChange}
              />
              <InputGroup.Append>
                <Button variant="outline-secondary" type="submit">
                  <img
                    src={searchIcon}
                    className="d-inline-block align-top"
                    alt="search"
                    width="18"
                    height="18"
                  />
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Form>
        </Navbar>
      </NavBarWrapper>
    );
  }
}

const NavBarWrapper = styled.div`
  background: var(--mainYellow);

  .navbar {
    background: var(--mainYellow) !important;

    .input-group {
      .input-group-append {
        background: var(--superLightGrey);
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        border-radius: 0.25rem;

        .btn {
          border-color: transparent;
        }
      }

      .form-control {
        font-size: 0.85vw;
      }
    }
  }
`;

export default withRouter(NavBarComponent);
