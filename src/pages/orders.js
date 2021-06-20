import { Button, Col, Row } from "antd";
import Modal from "antd/lib/modal/Modal";
import { useContext, useState } from "react";
import { useSelector } from "react-redux";
import SiteList from "../components/headerSiteList";
import OrderList from "../components/orderList";
import Service, { Token } from "../redux/context";

function Orders(props) {
  const token = useContext(Token);
  const [modal1Visible, setVisible] = useState(false);
  const service = useContext(Service);
  const [site, setSite] = useState('');
  const [tarif, setTariff] = useState();
  const current = useSelector(state => state.current_site);
  const { tarrifs, sites, allTariffs, reboot } = props;
  const {tariff_for_site} = tarrifs;
  const setModal1Visible = (modal1Visible) => {
    setVisible(modal1Visible);
  }
  // setTest('kek');
  const sendData = (modal1Visible)=> {
    // console.log(sites[site].id,allTariffs[tarif].id)
    service.rest.postOrder(allTariffs[tarif].id, sites[site].id, token).then(()=>reboot())
    setVisible(modal1Visible);
  }

  return (
    <Row align='middle' className='Orders'>
      <Col span={24}>
        <OrderList current={current} data={tariff_for_site} />
      </Col>
      <Button type="primary" onClick={() => setModal1Visible(true)}>
        Добавить услугу
        </Button>
      <Modal
        title="Добавить услугу"
        style={{ top: 20 }}
        visible={modal1Visible}
        onOk={() => sendData(false)}
        onCancel={() => setModal1Visible(false)}
      >
        <SiteList changeSite={(item) => setSite(item)} sites={sites} />
        <SiteList changeSite={(item) => setTariff(item)} caption='Choose tariff' sites={allTariffs} />
      </Modal>
    </Row>
  );
}

export default Orders;
