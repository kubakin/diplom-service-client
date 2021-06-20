import { Col, Row } from "antd";
import { useSelector } from "react-redux";
function Balance(props) {
  const authData = useSelector(store => store.authData);
  const { balance } = authData.profile_of_user
  // const service = useContext(Service);
  const { topupBalance } = props;
    return (
      <Row className="Balance" justify='center'>
        <Col>
        <h1>Баланс: {balance.toFixed(3)}$</h1>
        <a href="/#" onClick={(e) => topupBalance(e)} className='classicButton'>Пополнить</a>
      </Col>
      </Row>
    );
  

}

export default Balance;
