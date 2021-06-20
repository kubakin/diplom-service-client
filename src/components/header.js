import { Col, Row } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../media/logo.png';
import SiteList from './headerSiteList';
function Header(props) {
  const { sites, changeSite } = props
  return (
    <Row justify='center' className='Header'>
      <Row className="Header-content" justify='space-between'>
        <Col>
          <Link to='/'><img src={logo} alt="Logo" /></Link>
        <SiteList changeSite={(item)=>changeSite(item)} sites={sites}/>
        </Col>
        <Col className='nav'>
          <Link to="/">Главная</Link>
          {/* <Link to="/">Настройки</Link> */}
          <Link to="/balance">Баланс</Link>
          <Link to="/reports">Документы</Link>
          <Link to="/stat">Статистика</Link>
          <Link to="/orders">Услуги</Link>
          <Link to="/tariff">Тарифы</Link>
        </Col>
      </Row>
    </Row>
  );
}

export default Header;
