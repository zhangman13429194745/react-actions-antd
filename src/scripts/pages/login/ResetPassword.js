/**
 * Created by zhangmanman on 2017/8/4.
 */
import React from 'react';
import {connect} from 'react-redux';
import {Button} from 'antd-mobile';
import {browserHistory} from 'react-router';
import VerificationCodeButton from '../../components/VerificationCodeButton'
import NavBar from '../../components/NavBar';
const ICON = require('../../../assets/base/login_logo@3x.png');
const SIGN_SHOW = require('../../../assets/base/sign_password_show_icon@3x.png');
const SIGN_HIDE = require('../../../assets/base/sign_password_hide_icon@3x.png');
const CHECK_IN = require('../../../assets/base/check_in_icon@3x.png');
const CHECK_OFF = require('../../../assets/base/check_off_icon@3x.png');
const LOGIN_PASSWORD_ICON = require('../../../assets/base/login_password_icon@3x.png');
const LOGIN_IDENTIFYING_CODE_ICON = require('../../../assets/base/login_identifying_code_icon@3x.png');
class ResetPassword extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
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
    goTONext = () =>{
        browserHistory.replace('/index')
    }
    render() {
        return (
            <div className="container-background" id="login">
                <NavBar title={this.difSource().title} left/>
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
                <Button style={{color:'#fff',backgroundColor:'red',width:"90%",marginLeft:"5%", marginTop:100, borderRadius:50}} disabled={this.state.hasError?true:false} onClick={this.goTONext}>确认注册</Button>
            </div>
        );
    }
    //分为忘记密码和修改密码两种去向
    difSource() {
        if (this.props.location.query.to === 'forgetPassword') {
            return {
                title: '设置密码',
                submitButtonText: '确 认',
                otpType: 'LOGIN_PASSWORD_RESET'
            }
        } else {
            return {
                title: '设置密码',
                submitButtonText: '确 认',
                otpType: 'LOGIN_PASSWORD_RESET'
            }
        }
    }
}

ResetPassword.contextTypes = {
    router: React.PropTypes.object.isRequired
};
export default connect(
    (state) => ({}),
    (dispatch) => ({})
)(ResetPassword);
