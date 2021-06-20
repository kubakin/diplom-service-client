import { Col, Row } from 'antd';
import React from 'react';
function OrderList(props) {
  const { data, current } = props;
  if(data) {
  const list = data.map((item, key) => {
    return (
      <Row justify='center' className='cell' key={key}>
        <Col span={8}><p>{current.name}</p></Col>
        <Col span={8}><p>{item.tariff_name}</p></Col>
        <Col span={8}><a href="/#">Удалить</a></Col>
      </Row>

    )
  })
  return (
    <>
      {list}
    </>
  );
}
return (
<Row justify='center' className='cell'>
  <p>Нет данных или не выбран сайт</p>
</Row>
)
}

export default OrderList;
