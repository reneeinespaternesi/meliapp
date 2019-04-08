import React from "react";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";

export default function BreadCrumbComponent({ title }) {
  return (
    <Row>
      <Col xs={8}>
        <BreadcrumbWrapper className="mt-3 mb-3 ml-3">
          Electrónica, Audio y Video
        </BreadcrumbWrapper>
      </Col>
    </Row>
  );
}

const BreadcrumbWrapper = styled.div`
  font-size: 0.75vw;
`;
