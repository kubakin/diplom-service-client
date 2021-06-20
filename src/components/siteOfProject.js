import { Col, Row } from 'antd';
import React from 'react';
function SomeSite(props) {
  return (
    <Row className='siteOfProject' justify='space-between'>
      <Col>
        <span>{props.item.name}</span>
      </Col>
      <Col className='active'>
        Работает
      </Col>
    </Row>
  );
}

export default SomeSite;
