const logOn = (obj) => {
    return {
        type: 'LOGIN',
        payload: obj,
    }
}
const haveToken = () => {
    return {
        type: 'IS_AUTH',
    }
}
const writeData = (obj)=> {
    return {
        type: 'MY_DATA',
        payload: obj,
    }
}
const changeSite = (obj)=> {
    return {
        type: 'CUR_SITE',
        payload: obj,
    }
}
const setTariff = (obj) => {
    return {
        type: 'SET_TAR',
        payload: obj,
    }
}
const upd =()=> {
    return {
        type: 'UPDATE_DATA',
    }
}
export {
    logOn,
    haveToken,
    writeData,
    changeSite,
    setTariff,
    upd
}