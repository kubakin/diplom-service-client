import { Col, Row } from 'antd';
import React from 'react';
import OneReport from './oneReport';
function ListReport(props) {
  const { data, setModal1Visible } = props;
  const list = data.map((item, key) => {
    return (
      <Col span={6} key={key}>
        <OneReport setModal1Visible={(status, item)=>setModal1Visible(status, item)} item={item} />
      </Col>

    )
  })
  return (
    <Row className='report' justify='center'>
      {list}
    </Row>
  );
}

export default ListReport;
