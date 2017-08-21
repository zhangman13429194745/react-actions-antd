/**
 * Created by zhangmanman on 2017/8/3.
 */
import React from 'react';
import {connect} from 'react-redux';
import { List, InputItem,Icon ,Button} from 'antd-mobile';
import NavBar from '../../components/NavBar';
import {withRouter} from 'react-router';
import { bindActionCreators } from 'redux';
import * as appActions from '../../redux/app';
import {themeColor} from "../../constants/ui";
const ICON = require('../../../assets/base/login_logo@3x.png');
const SIGN_SHOW = require('../../../assets/base/sign_password_show_icon@3x.png');
const SIGN_HIDE = require('../../../assets/base/sign_password_hide_icon@3x.png');
const LOGIN_PASSWORD_ICON = require('../../../assets/base/login_password_icon@3x.png');
class CheckPassword extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            password:null,
            showPassword:true
        };
    }

    componentDidMount() {
        console.log('phone===',this.props.mobilePhone)
    }
    setShowPassword = () =>{
        this.setState({
            showPassword:!this.state.showPassword
        })

    }
    goTONext = async() => {
        await this.props.setLogin(true)
        this.props.router.push('/index')
    }
    gotoSetPassWord = () =>{
        this.props.router.push({
            pathname:'/ResetPassword',
            query: {
                to: 'forgetPassword',
            }})
    }
    onChangePassword = (value) => {
        this.setState({
            password:value,
        });
    }
    _formatPhone = (phoneNum) => {
        if (phoneNum) {
            return phoneNum.substring(0, 3) + "****" + phoneNum.substring(7, 11)
        }
    };
    render() {
        let backgroundColor;
        if(this.state.password&&this.state.password.length>5){
            backgroundColor='red'
        }else{
            backgroundColor='#999'

        }
        return (
            <div className="container-background" id="login">
                <NavBar title="登录" left route={this.props.router} />
                <div className="div-image" style={{display:'flex',height:400,justifyContent:'center', alignItems: 'center'}}>
                    <img src={ICON}/>
                </div>
                <div style={{height:100,lineHeight:'100px', textAlign:'center'}}>{this.props.mobilePhone}</div>
                <List >
                    <InputItem
                        type={this.state.showPassword ? "password":''}
                        placeholder="请输入登录密码"
                        onChange={this.onChangePassword}
                        value={this.state.password}
                        extra={ <img onClick={this.setShowPassword} src={this.state.showPassword ? SIGN_SHOW : SIGN_HIDE}/>}
                    ><img src={LOGIN_PASSWORD_ICON}/></InputItem>
                </List>
                <Button style={{color:'#fff',backgroundColor,width:"90%",marginLeft:"5%", marginTop:100, borderRadius:50}} disabled={this.state.hasError?true:false} onClick={this.goTONext}>下一步</Button>
                <div style={{height:100,lineHeight:'100px', textAlign:'center',color:themeColor.mainColor}} onClick={this.gotoSetPassWord}>设置密码</div>
            </div>
        );
    }
}

CheckPassword.contextTypes = {
    router: React.PropTypes.object.isRequired
};
export default connect(
    (state) => ({
        mobilePhone:state.user.mobilePhone
    }),
    (dispatch) => ({
        setLogin:bindActionCreators(appActions.setLogin,dispatch)
    })
)(withRouter(CheckPassword));
