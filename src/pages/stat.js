import { Col, Row } from "antd";
import { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Chart from "../components/chart";
import Service from "../redux/context";
function Stat() {
  const service = useContext(Service);
  const [data, setData] = useState();
  const current_site = useSelector(store => store.current_site);
  useEffect(() => {
    if(current_site !== 'false')
      service.rest.getCharts(current_site.name).then(rs => setData(rs))
  }, [current_site, service])
  if (data) {
    return (
      <Row justify='space-around'>
        <Col span={16}>
          <Chart data={data} />
        </Col>
        {/* <Col offset={1} span={7}>
        <p>Информация</p>
        <p>Количество проверок: 100</p>
      </Col> */}
      </Row>
    )
  }
  return (
    <div className="stat">
      stat
    </div>
  );
}

export default Stat;
