import React from 'react';
import { Link } from 'react-router-dom';
function OneTariff(props) {
  const { item } = props;
  const {name, miniText, id} = item;
  return (
    <>
        <h1 className='name'>{name}</h1>
        <p>{miniText}</p>
        <Link to={"/tariff/"+ id}>Узнать подробнее</Link>
    </>
  );
}

export default OneTariff;
