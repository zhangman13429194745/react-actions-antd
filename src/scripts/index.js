import React from 'react';
import { render } from 'react-dom';
// Import HTML
import '../index.html';
// Import css
import '../styles/business.css';
import '../styles/public.css';
import '../styles/styles.css';
// Import Components
import App from './pages/app';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './redux/index.js';
import index from './pages';
import detail from './pages/pc/detail';
//login
import login from './pages/login';
import register from './pages/login/Register';
import checkPassword from './pages/login/CheckPassword';
import ResetPassword from './pages/login/ResetPassword'
const router = (
  <Provider store={store}>
    <Router history={browserHistory}>
        <Route path="/" component={App}>
        <Route path="/index" component={index}></Route>
        <Route path="/detail" component={detail}></Route>
        /*---------login---------*/
        <Route path="/login" component={login}></Route>
        <Route path="/register" component={register}></Route>
        <Route path="/checkPassword" component={checkPassword}></Route>
        <Route path="/ResetPassword" component={ResetPassword}></Route>
        <Route path="*" component={index} />
        <IndexRoute component={index}></IndexRoute>
        </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'));
