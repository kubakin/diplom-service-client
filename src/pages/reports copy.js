import { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ListReport from "../components/reportList";
import Service from "../redux/context";

function Report() {
  const service = useContext(Service);
  const [data, setData] = useState();
  const authData = useSelector(store=>store.authData);
  const {dogovor_for_user} = authData
  // useEffect(()=> {
  //   if (current_site.id)
  //   service.rest.getReports(current_site.id).then(rs=>setData(rs))
  // }, [current_site, service])
  if (dogovor_for_user) {
    return (
      <>
      {/* <p>kek</p> */}
      <ListReport data = {dogovor_for_user}/>
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