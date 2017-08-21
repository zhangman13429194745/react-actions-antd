/**
 * Created by zhangmanman on 2017/8/2.
 */
import React from 'react';
import {connect} from 'react-redux';
import NavBar from '../../components/NavBar';
import { bindActionCreators } from 'redux';
import * as userActions from '../../redux/user';
import {withRouter} from 'react-router';
import { List, InputItem,Icon ,Button} from 'antd-mobile';
const ICON = require('../../../assets/base/login_logo@3x.png');
const LOGIN_PHONE_ICON = require('../../../assets/base/login_phone_icon@3x.png');
class index extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            hasError: this.props.mobilePhone&&this.props.mobilePhone.length < 11?true:false,
            value: this.props.mobilePhone||'',
        };
    }

    componentDidMount() {
    }
    goTONext = async() => {
       await this.props.setMobilePhone(this.state.value.replace(/\s/g, ''))
        this.props.router.push({
            pathname:'/register',
            query: {
                phone: this.state.value,
            }
        })
    }
    onChange = (value) => {
        if (value.replace(/\s/g, '').length < 11) {
            this.setState({
                hasError: true,
            });
        } else {
            this.setState({
                hasError: false,
            });
        }
        this.setState({
            value,
        });
    }

    render() {
        let backgroundColor;
        if(!this.state.hasError){
            backgroundColor='red'
        }else{
            backgroundColor='#999'

        }
        return (
            <div className="container-background" id="login">
                <NavBar title="注册|登录" left />
                <div className="div-image">
                    <img src={ICON}/>
                </div>
                <List >
                    <InputItem
                        clear
                        type="phone"
                        placeholder="请输入登录手机号"
                        onChange={this.onChange}
                        value={this.state.value}
                    ><img src={LOGIN_PHONE_ICON}/></InputItem>
                </List>
                <Button className="commit-button" style={{backgroundColor}} disabled={this.state.hasError?true:false} onClick={this.goTONext}>下一步</Button>
            </div>
        );
    }
    renderHeader() {
    return (
        <div style={{height:100,lineHeight:100}}>
            <img src={ICON} style={{height: 90, width: 90, marginTop: 43}}/>
        </div>
    )
}
}

index.contextTypes = {
    router: React.PropTypes.object.isRequired
};
export default connect(
    (state) => ({
        mobilePhone:state.user.mobilePhone
    }),
    (dispatch) => ({
        setMobilePhone:bindActionCreators(userActions.setMobilePhone,dispatch)
    })
)(withRouter(index));
