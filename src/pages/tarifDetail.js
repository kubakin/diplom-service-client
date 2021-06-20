import { Card, Row } from "antd";
import { useContext, useState } from "react";
import { useParams } from "react-router";
import { useService } from "../hook/hook";
import Service from "../redux/context";

function TariffDetail(props) {
  const id = useParams().id
  const service = useContext(Service);
  const [ky, setKey] = useState('opis');
  const tarif = useService(service.rest.getTariff(id), id);
  const {data, status} = tarif
  if(data) {
    const tabListNoTitle = [
      {
        key: 'opis',
        tab: 'Описание',
      },
      {
        key: 'instruction',
        tab: 'Инстукция по установке',
      },
    ];
    function createMarkup(txt) {
      return {__html: txt};
    }
    const contentListNoTitle = {
      opis: <p dangerouslySetInnerHTML={createMarkup(data.text)}></p>,
      instruction: <p dangerouslySetInnerHTML={createMarkup(data.instruction)}></p>,
    };
    const onTabChange = (key) => {
      setKey(key)
    };
     return  (
      <Row className="Tariff">
        <Card
          style={{ width: '100%' }}
          tabList={tabListNoTitle}
          activeTabKey={ky}
          onTabChange={(key) => onTabChange(key, 'noTitleKey')}
        >
          {contentListNoTitle[ky]}
        </Card>
      </Row>
    );
  }
  return status;
}

export default TariffDetail;
