import React from 'react';
function SiteList({sites, changeSite, caption='Choose site'}) {
  // const { sites, changeSite } = props;
  const list = sites.map((item, key) => {
    return (
      <option key={key} value={key}>{item.name}</option>
    )
  })
  const toggle = (e) => {
    if (e.target.value !== 'false')
      changeSite(e.target.value)
  }
  return (
    <select onChange={(e) => toggle(e)} name="hero[]">
      <option value={false}>{caption}</option>
      {list}
    </select>
  );
}

export default SiteList;
