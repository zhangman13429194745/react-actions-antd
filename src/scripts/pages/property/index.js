import React from 'react';
import { PropTypes } from 'react-router';
import { connect } from 'react-redux';
import NavBar from '../../components/NavBar';
import { bindActionCreators } from 'redux';
import * as appActions from '../../redux/app';
import { Button, Flex, WingBlank } from 'antd-mobile';

class index extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
        };
    }
    async componentDidMount() {
        await this.props.getProductInfo();
        PG.toast('hellow word')
        console.log('post===',this.props.productInfo)
    }
    render() {        
        return (
            <div>
                <NavBar title="首页" />
                <Button  type="primary" size="small" inline onClick={()=>{
                    this.props.router.push('/detail')
                }}>
                    下一页
                </Button>
            </div>
        );
    }
}

index.contextTypes = {
    router: React.PropTypes.object.isRequired
};
export default connect(
    (state) => ({
        productInfo:state.app.productInfo
    }),
    (dispatch) => ({
        getProductInfo:bindActionCreators(appActions.getProductInfo,dispatch)
    })
)(index);



