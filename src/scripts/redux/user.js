import * as cache from '../constants/cache';
import * as request from '../service/request';
export const userActionTypes = {
    SET_MOBILE_PHONE:"SET_MOBILE_PHONE"
}

/**
 * reducers
 */
const initialState = {
    darkMode:false,
    selectedIndex:0,
    productInfo:{}

}
export const userReducer =  (state = initialState, action)=>{
    switch(action.type) {
        //手机号
        case userActionTypes.SET_MOBILE_PHONE:
            return {
                ...state,
                mobilePhone:action.value
            }
        default:
            return state;
    }
}

/**
 * actions
 */
//手机号
export const setMobilePhone = (value) => {
    return async (dispatch, getState) => {
        cache.setMoblilePhone(value)
        dispatch({
            'type': userActionTypes.SET_MOBILE_PHONE,
            'value': value,
        })
    }
}
