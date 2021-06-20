const initialState =  {
    test: 1,
    login: false,
    token: '',
    authData: {},
    current_site: false,
    tarrifs: [],
    sites: [],
    name: '',
}
const reducer = (state = initialState, actions) => {
    switch (actions.type) {
        case "LOGIN": {
            localStorage.setItem('Token', actions.payload)
            return {
                ...initialState,
                login: true,
                authData: {
                    token: actions.payload,
                },
            }
        }
        case "IS_AUTH": {
            const token = localStorage.getItem('Token');
            if (token == null) {
                return {
                    ...initialState
                }
            }
            else {
                return {
                    ...initialState,
                    token,
                }
            }
            
        }
        case 'MY_DATA': {
            const authData = {...actions.payload}
            const sites = Object.values({...actions.payload.owner_of_site})
            return {
                ...state,
                authData: {...authData},
                login: true,
                sites: [...sites],
            }
        }
        case "CUR_SITE": {
            const current_site = state.sites[actions.payload]
            const name = actions.payload;
            // console.log(current_site);
            return {
                ...state,
                current_site: {...current_site},
                name,
            }
        }
        case "SET_TAR": {
            const tarrifs = actions.payload
            // console.log(tarrifs);
            return {
                ...state,
                tarrifs: [...tarrifs],
            }
        }
        case "UPDATE_DATA": {
            const current_site = state.sites[state.name]
            console.log(current_site);
            return {
                ...state,
                current_site: {...current_site},
            }
        }
        default: {
            return state
        }
    }
}
export default reducer;