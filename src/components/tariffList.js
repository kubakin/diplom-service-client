import { Col, Row } from 'antd';
import React from 'react';
import OneTariff from './oneTariff';
function TariffList(props) {
  const { data } = props;
  const list = data.map((item, key) => {
    return (
      <Col span={6} key={key} className='someTariff'>
        <OneTariff  item={item} />
      </Col>

    )
  })
  return (
    <Row className='tariff' justify='space-around'>
      {list}
    </Row>
  );
}

export default TariffList;
