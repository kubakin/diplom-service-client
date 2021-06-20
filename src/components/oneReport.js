import { Button, Card } from 'antd';
import React from 'react';
function OneReport(props) {
  const { item,setModal1Visible } = props;
  return (
    <Card style={{ width: 300 }}>
      <h1>Документ {item.type}</h1>
      {/* <p>Count: {item.text}</p> */}
      <p>Дата: {item.date}</p>
      <Button type="primary" onClick={() => setModal1Visible(true, item)}>
        Подробнее
        </Button>
    </Card>
  );
}

export default OneReport;
