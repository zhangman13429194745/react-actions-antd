/**
 * Created by zhangmanman on 2017/8/2.
 */
import React from 'react';
import {connect} from 'react-redux';
import { List, InputItem ,Button} from 'antd-mobile';
import NavBar from '../../components/NavBar';
import {browserHistory} from 'react-router';
import VerificationCodeButton from '../../components/VerificationCodeButton';
import { bindActionCreators } from 'redux';
import * as appActions from '../../redux/app';
const ICON = require('../../../assets/base/login_logo@3x.png');
const SIGN_SHOW = require('../../../assets/base/sign_password_show_icon@3x.png');
const SIGN_HIDE = require('../../../assets/base/sign_password_hide_icon@3x.png');
const CHECK_IN = require('../../../assets/base/check_in_icon@3x.png');
const CHECK_OFF = require('../../../assets/base/check_off_icon@3x.png');
const LOGIN_PASSWORD_ICON = require('../../../assets/base/login_password_icon@3x.png');
const LOGIN_IDENTIFYING_CODE_ICON = require('../../../assets/base/login_identifying_code_icon@3x.png');
class Register extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            showPassword:true,
            password:'',
            verificationCode:'',
        };
    }

    componentDidMount() {
    }

    setShowPassword = () =>{
        this.setState({
            showPassword:!this.state.showPassword
        })

    }
    onChange = (value) => {
        this.setState({
            verificationCode:value,
        });
    }
    onChangePassword = (value) => {
        this.setState({
            password:value,
        });
    }
    goTONext = async() =>{
        await this.props.setLogin(true)
        browserHistory.replace('/index')
    }

    render() {
        let backgroundColor;
        if(this.state.verificationCode.length>0&&this.state.password.length>0){
            backgroundColor='red'
        }else{
            backgroundColor='#999'

        }
        return (
            <div className="container-background" id="login">
                <NavBar title="注册" left />
                <div className="div-image" style={{display:'flex',height:400,justifyContent:'center', alignItems: 'center'}}>
                    <img src={ICON}/>
                </div>
                <div style={{width:'100%', height:100,lineHeight:100}}>{this.props.mobilePhone}</div>
                <List >
                    <InputItem
                        style={{height:100,lineHeight:100}}
                        type="number"
                        placeholder="请输入验证码"
                        onChange={this.onChange}
                        value={this.state.verificationCode}
                        extra={ <VerificationCodeButton/>}
                    ><img src={LOGIN_IDENTIFYING_CODE_ICON}/></InputItem>
                    <InputItem
                        type={this.state.showPassword ? "password":''}
                        placeholder="需6-16位数字和字母组合"
                        onChange={this.onChangePassword}
                        value={this.state.password}
                        extra={ <img onClick={this.setShowPassword} src={this.state.showPassword ? SIGN_SHOW : SIGN_HIDE}/>}
                    ><img src={LOGIN_PASSWORD_ICON}/></InputItem>
                </List>



                <Button className="commit-button" style={{backgroundColor}} disabled={this.state.hasError?true:false} onClick={this.goTONext}>确认注册</Button>
            </div>
        );
    }
}

Register.contextTypes = {
    router: React.PropTypes.object.isRequired
};
export default connect(
    (state) => ({
        mobilePhone:state.user.mobilePhone
    }),
    (dispatch) => ({
        setLogin:bindActionCreators(appActions.setLogin,dispatch)
    })
)(Register);
