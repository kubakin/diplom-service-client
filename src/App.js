import Header from "./components/header";
import React from 'react';
import { changeSite, haveToken, logOn, setTariff, writeData, upd } from './redux/action';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./pages/home";
import Tariff from "./pages/tariff";
import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Service, { Token } from "./redux/context";
import Stat from "./pages/stat";
import Report from "./pages/reports";
import Footer from "./components/footer";
import { Row } from "antd";
import Orders from "./pages/orders";
import TariffDetail from "./pages/tarifDetail";
import Auth from "./service/auth";
import Balance from "./pages/balance";

function App() {

  const dispatch = useDispatch();
  const isAuth = useSelector(store => store.login);
  const token = useSelector(store => store.token);
  const service = useContext(Service);
  const authData = useSelector(store => store.authData);
  const current_site = useSelector(store => store.current_site);
  const allTariffs = useSelector(store=>store.tarrifs);
  const sts = useSelector(store=>store.sites);

  
  const rebootData = ()=> {
    service.user.checkTokenAndGetData(token).then(rs => dispatch(writeData(rs))).catch(error => console.log(error));
    dispatch(upd())

  }
  useEffect(()=> {
    dispatch(upd())
  }, [sts, dispatch])
  useEffect(() => {
    dispatch(haveToken());
    rebootData();
    service.user.checkTokenAndGetData(token).then(rs => dispatch(writeData(rs))).catch(error => console.log(error));
    service.rest.getTariff().then(rs => dispatch(setTariff(rs)));
    // return rebootData()
  }, [dispatch, token, service.user, service.rest])
  const [authUsername, setUsername] = useState('')
  const [authPassword, setPassword] = useState('')
  const handleChange = (e, func) => {
    func(e.target.value);
  }
  const login = (e) => {
    e.preventDefault();
    service.user.login(authUsername, authPassword).then(rs => dispatch(logOn(rs)))
  }
  service.rest.token = 'qwerty';
  if (!isAuth) {
    return (
      <form>
        <input type="text" autoComplete='on' value={authUsername} onChange={(e) => handleChange(e, setUsername)} />
        <input type="password" autoComplete='on' value={authPassword} onChange={(e) => handleChange(e, setPassword)} />
        <input onClick={(e) => login(e)} type="submit" value="go" />
      </form>
    )
  }
  const topupBalance = (e) => {
    e.preventDefault()
    console.log(token)
    service.rest.postBalance(token);
  }
  return (
    <Token.Provider value={token}>
    <Row className="App" justify='center'>
      <Router>
        <Header site={current_site.name || 'choose'} sites={sts} changeSite={(site) => dispatch(changeSite(site))} />
        <Row className='content' justify='center'>
          <Switch>
            {/* <Route path="/info">
              <Info />
            </Route> */}
            <Route path="/stat">
              <Stat />
            </Route>
            <Route path="/reports">
              <Report />
            </Route>
            <Route path="/orders">
              <Orders reboot={()=>rebootData()} allTariffs={allTariffs} sites={sts} tarrifs={current_site}/>
            </Route>
            <Route path="/tariff/:id">
              <TariffDetail />
            </Route>
            <Route path="/tariff">
              <Tariff />
            </Route>
            <Route path="/balance">
              <Balance topupBalance={(e)=>topupBalance(e)}/>
            </Route>
            <Route path="/">
              <Home topupBalance={(e)=>topupBalance(e)}/>
            </Route>
          </Switch>
        </Row>
      </Router>
      {/* <p>hello {authData.username}</p> */}
      <Footer>

      </Footer>
    </Row>
    </Token.Provider>

  );
}

export default App;
