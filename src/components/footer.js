import { Col, Row } from 'antd';
import React from 'react';
import logo from '../media/logo.png';
function Footer(props) {
  return (
    <Row justify='center' className="Footer">
      <Row justify='space-between' className='Footer-content'>

        <Col span={16}>
          <Row className='logoBlock'>
            <img src={logo} alt="Logo" />
          </Row>
          <Row className='getContanct'>
            <Col>
              <p>Контактная информация</p>
              <p>Ленина, дом 23, г. Петрозаводск</p>
              <p>+79116623048</p>
              <p>+79116623048</p>
            </Col>
            <Col offset={1}>
              <p>Телефон службы поддержки</p>
              <p>+79116623048</p>
              <p>+79116623048</p>
            </Col>
          </Row>
        </Col>
        <Col className='contact-form'>
          <p>Контактная форма</p>
          <div ><input className='topic' placeholder='Тема' type="text" /></div>
          <div><textarea name="comment" placeholder='Текст' cols="40" rows="5"></textarea></div>
          <div ><input className='classicButton' type="submit" value='Отправить' /></div>
        </Col>


      </Row>
    </Row>
  );
}

export default Footer;
