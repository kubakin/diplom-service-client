import { Row } from "antd";
import TariffList from "../components/tariffList";
import { useSelector } from "react-redux";
function Tariff() {
  // const service = useContext(Service);
  // const [tariff, setTariff] = useState();
  const tariffs = useSelector(store => store.tarrifs);
  // useEffect(() => {
  //   service.rest.getTariff().then(rs=>setTariff(rs));
  // }, [service.rest])
  if (tariffs) {

    return (
      <Row className="Tariff">
        <TariffList data={tariffs} />
        
      </Row>
    );
  }
  return (
    <p>No data</p>
  )
}

export default Tariff;
