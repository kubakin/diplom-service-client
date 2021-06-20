import { Button } from "antd";
import Modal from "antd/lib/modal/Modal";
import { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ListReport from "../components/reportList";
import Service from "../redux/context";

function Report() {
  const service = useContext(Service);
  const [item, setItem] = useState('')
  const setModal1Visible = (modal1Visible, item = '') => {
    if (modal1Visible === true) {
      setItem(item);
    }
    setVisible(modal1Visible);
  }
  function createMarkup(txt) {
    return { __html: txt };
  }
  const [modal1Visible, setVisible] = useState(false);

  const [data, setData] = useState();
  const authData = useSelector(store => store.authData);
  const { dogovor_for_user } = authData
  // useEffect(()=> {
  //   if (current_site.id)
  //   service.rest.getReports(current_site.id).then(rs=>setData(rs))
  // }, [current_site, service])
  if (dogovor_for_user) {
    return (
      <>
        {/* <p>kek</p> */}
        <ListReport setModal1Visible={(status, item) => setModal1Visible(status, item)} data={dogovor_for_user} />
        {/* <Button type="primary" onClick={() => setModal1Visible(true)}>
        Display a modal dialog at 20px to Top
        </Button> */}
        <Modal
          title="Подробная информация"
          style={{ top: 20 }}
          visible={modal1Visible}
          onOk={() => setModal1Visible(false)}
          onCancel={() => setModal1Visible(false)}
        >
          <p>{item.type}</p>
          {/* <p>Count: {item.text}</p> */}

          <p dangerouslySetInnerHTML={createMarkup(item.text)} />
          <p>Дата: {item.date}</p>

        </Modal>
      </>
    )
  }
  return (
    <div className="report">
      {/* {data} */}
    </div>
  );
}

export default Report;