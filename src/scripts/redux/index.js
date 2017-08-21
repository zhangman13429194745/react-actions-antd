import { createStore, applyMiddleware,combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { routerReducer } from 'react-router-redux';

import {appReducer} from './app';
import {userReducer} from './user';
import * as cache from '../constants/cache';
const rootReducer = combineReducers({app:appReducer,user:userReducer, routing: routerReducer});


const configureStore = (initialState) =>{
    return createStore(rootReducer,initialState,applyMiddleware(thunk));
}

//初始化缓存
let darkMode =cache.getTest() == '1'?true:false;
let mobilePhone = cache.getMoblilePhone();
let isLogin = cache.getIsLogin();

console.log('mobile===',mobilePhone);

const store = configureStore({
  app:{
    darkMode,
    isLogin,
    selectedIndex:0,
    productInfo:{},
  },
  user:{
    mobilePhone,
  }
});

export default store;
