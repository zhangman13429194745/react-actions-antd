import React from 'react';
import { PropTypes } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as appActions from '../../redux/app';
//UI component
import { NavBar, Icon,Button } from 'antd-mobile';
const ICON = require('../../../assets/base/login_logo@3x.png');
class index extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            supportedBanks: null,
            fail: false,
            render: false,
        };
    }
    componentDidMount() {
    }
    setOutLogin = () =>{
        this.props.setLogin(false);
    }
    render() {        
        return (
            <div>
                <Button onClick={this.setOutLogin}>退出登录</Button>
                <div style={{ display: '-webkit-box', display: 'flex', padding: '0.3rem 0' }}>
                    <img style={{ height: '0.8rem',lineHeight:'0.8rem', marginRight: '0.3rem' }} src={ICON} alt="icon" />
                    <div className="row-text">
                        <div style={{ fontWeight: 'bold' }}>11111</div>
                        {/*<div><span style={{ fontSize: '0.6rem', color: '#FF6E27' }}>35</span>¥</div>*/}
                    </div>
                    <div>></div>
                </div>
            </div>
        );
    }
}

index.contextTypes = {
    router: React.PropTypes.object.isRequired
};
export default connect(
    (state) => ({

    }),
    (dispatch) => ({
        setLogin:bindActionCreators(appActions.setLogin,dispatch)
    })
)(index);



