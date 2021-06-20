import { useEffect, useState } from "react";

const useService = (fn, id) => {
    const [data, setData] = useState();
    const [load, setLoad] = useState(true);
    useEffect(() => {
        fn.then(rs => {
            setData(rs)
            setLoad(false)
        });
    }, [id]) // eslint-disable-line react-hooks/exhaustive-deps
    if (load) {
        return ({ status: <p>load</p> })
    }
    if (!data) {
        return ({ status: <p>error</p> })

    }
    return {
        data,
    }
}
// const useShowOrError = (data, component) => {
//     if (data) {
//         return component
//     }
//     return {
//         error: <div><p>No data</p></div>
//     }
// }
export {
    useService
}