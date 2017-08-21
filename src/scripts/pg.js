/**
 * Created by zhangmanman on 2017/8/1.
 */
import { Toast} from 'antd-mobile';
import {browserHistory} from 'react-router';
let PG={};
PG.toast=(text, duration) => {
    let message = '';
    if(text==null || text == undefined){
        message = '未知错误';
    }else{
        message = (typeof text == 'string') ? text : JSON.stringify(text);
    }
    Toast.info(message, duration ? duration : 2, null, false);
}
// PG.browserHistory=PG
window.PG = PG;