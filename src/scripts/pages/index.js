/**
 * Created by zhangmanman on 2017/8/7.
 */
import React, {Component, PureComponent} from 'react';
import { PropTypes,withRouter} from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as appActions from '../redux/app';
import { TabBar, Icon } from 'antd-mobile';
//UI component
import {Button} from 'antd';

import {themeColor} from '../constants/ui';
import Property from './property';
import Discover from './discover';
import User from './user';
import Loan from './loan';
const TabBarConfigArray = [
    {
        title: '账单',
        component: Property,
        icon: require('../../assets/base/tab_property_icon@3x.png'),
        selectIcon: require('../../assets/base/tab_property_selected_icon@3x.png'),
    },
    {
        title: '借款',
        component: Loan,
        icon: require('../../assets/base/tab_loan_icon@3x.png'),
        selectIcon: require('../../assets/base/tab_loan_selected_icon@3x.png'),
    },
    {
        title: '发现',
        component: Discover,
        icon: require('../../assets/base/tab_discovery_icon@3x.png'),
        selectIcon: require('../../assets/base/tab_property_icon@3x.png'),
    },
    {
        title: '我的',
        component: User,
        icon: require('../../assets/base/tab_card_icon@3x.png'),
        selectIcon: require('../../assets/base/tab_property_selected_icon@3x.png'),
    }
]


class index extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            token:0
        };
    }
    componentDidMount() {

    }

    render() {
        return (
            <TabBar unselectedTintColor="#949494" tintColor={themeColor.mainColor} barTintColor="white" hidden={false}>
                {
                    this.renderItem()
                }
            </TabBar>
        );
    }
    renderItem = () => {
        return TabBarConfigArray.map((item, index) => {
            return (
                <TabBar.Item
                    style={{height: '0.8rem'}}
                    key={index}
                    title={item.title}
                    icon={<img style={{width: '0.40rem',height: '0.40rem'}} className="qrcode-center" src={item.icon} />}
                    selectedIcon={<img style={{width: '0.40rem',height: '0.40rem'}} className="qrcode-center" src={item.selectIcon} />
                    }
                    selected={this.props.selectedIndex === index}
                    onPress={this._onClick(index)}>
                    {<item.component router={this.props.router}/>}
                </TabBar.Item>
            )
        })
    };
    _onClick = (index) => () => {
        console.log('55555=====',this.props.isLogin)
        if(!this.props.isLogin && index ==3){
            console.log('666666=====',this.props.isLogin)
            this.props.router.push('/login')
            return;
        }
        if (this.props.selectedIndex === index) {
            return
        }
        this.props.setSelectedIndex(index)
    }
}

export default connect(
    (state) => ({
        selectedIndex:state.app.selectedIndex,
        isLogin:state.app.isLogin,
    }),
    (dispatch) => ({
        setSelectedIndex:bindActionCreators(appActions.setSelectedIndex,dispatch)
    })
)(withRouter(index));

