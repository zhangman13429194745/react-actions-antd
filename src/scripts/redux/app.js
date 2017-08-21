import * as cache from '../constants/cache';
import * as request from '../service/request';
export const appActionTypes = {
    SET_DARK_MODE:"SET_DARK_MODE",
    SET_SELECT_INDEX:"SET_SELECT_INDEX",
    GET_PRODUCT_INFO:"GET_PRODUCT_INFO",
    SET_LOGIN:"SET_LOGIN",
}

/**
 * reducers
 */
const initialState = {
    darkMode:false,
    selectedIndex:0,
    productInfo:{}

}
export const appReducer =  (state = initialState, action)=>{
    switch(action.type) {
        case appActionTypes.SET_DARK_MODE:
            return {
                ...state,
                darkMode:action.value
            }
        case appActionTypes.SET_SELECT_INDEX:
            return {
                ...state,
                selectedIndex:action.value
            }
        case appActionTypes.GET_PRODUCT_INFO:
            return {
                ...state,
                productInfo:action.value
            }
        case appActionTypes.SET_LOGIN:
            return {
                ...state,
                isLogin:action.value
            }
        default:
            return state;
    }
}

/**
 * actions
 */
//设置演示颜色
export const setDarkMode = (value) =>{
    return async (dispatch)=>{
        // do something async/sync operation
        localStorage.setItem('DARK_MODE',value?'1':'0');
        dispatch({
            'type': appActionTypes.SET_DARK_MODE,
            'value': value,
        })
    }
}
//设置tabar
export const setSelectedIndex = (value) =>{
    return async (dispatch)=>{
        dispatch({
            'type': appActionTypes.SET_SELECT_INDEX,
            'value': value,
        })
    }
}

//获取产品配置信息
export const getProductInfo = () =>{
    return async (dispatch)=>{
        const result = await request.getProductInfo();
        dispatch({
            'type': appActionTypes.GET_PRODUCT_INFO,
            'value': result,
        })
    }
}
//是否登录
export const setLogin = (value) =>{
    return async (dispatch)=>{
        cache.setIsLogin(value)
        dispatch({
            'type': appActionTypes.SET_LOGIN,
            'value': value,
        })
    }
}