import * as ActionType from '../ActionType'


let initvalue = {
    isLoading: false,
    Profile: [],
    error: ''
}


export const ProfileReducer = (state = initvalue, action) => {
    console.log( "REDUCER DONE",action.type, action.payload );
    switch (action.type) {


        case ActionType.GET_PROFILE:
            return {
                ...state,
                isLoading: false,
                home: action.payload,
                error: ""
            }
        case ActionType.PROFILE:
            return {
                ...state,
                isLoading: false,
                Profile: state.Profile.concat(action.payload),
                error: ''
            }
        default:
            return state
    }
}