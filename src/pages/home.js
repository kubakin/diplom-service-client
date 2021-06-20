import { Col, Row } from "antd";
import { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Projects from "../components/yourProjects";
import { Token } from "../redux/context";

function Home(props) {
  const { topupBalance } = props;
  const authData = useSelector(store => store.authData);
  const {first_name, last_name, email} = authData;
  const { balance } = authData.profile_of_user
  const token = useContext(Token);
  console.log(token)
  const [cls, setCls] = useState('');
  const [status, setStatus] = useState(true);
  useEffect(() => {
    if (status === false) {
      setCls('edited')
    }
    else {
      setCls('')
    }
  }, [status])
  const changeData = (e) => {
    e.preventDefault();
    setStatus(!status)
  }

  return (
    <Row justify='space-around' className="Home">
      <Col>
        <h1>Ваши проекты</h1>
        <Projects sites={authData.owner_of_site} />
        <a href="Add site" className='addSite'>Add site</a>
      </Col>
      <Col>
        <h1>Ваши Данные</h1>
        <div className='privateData'>
          <p className={'mail ' + cls}><input disabled={status} type="text" name="" id='email' value={email} /></p>
          <p className={'mail ' + cls}><input disabled={status} type="text" name="" id='name' value={first_name +' '+ last_name} /></p>
          <p className={'mail ' + cls}><input disabled={status} type="text" name="" id='phone' value='+7 911 662 30 48' /></p>
          {/* <p className={'mail ' + cls}><input disabled={status} type="text" id='password' name="password" /></p> */}
          {/* <a href='/#' onClick={(e) => changeData(e)}>Изменить</a> */}
        </div>
      </Col>
      <Col>
        <h1>Баланс: {balance.toFixed(3)}$</h1>
        <Link className='classicButton' to="/balance">Баланс</Link>
      </Col>
    </Row>
  );
}

export default Home;