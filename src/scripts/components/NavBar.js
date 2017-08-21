import React from 'react';
import { NavBar, Icon } from 'antd-mobile';
import {browserHistory} from 'react-router';
export default class navBar extends React.Component{
    constructor(props, context) {
        super(props, context);
    }
    componentDidMount() {

    }

    _onLeftButtonClick = () => {
        browserHistory.goBack();
    }
    render() {
        let {
            left,
            right,
            title,
            ...props
        } = this.props;
        //
        return (
        <NavBar leftContent={left||this.props.leftClickCallback?<Icon type="left" size="md" />:null}
                iconName={false}
                mode="light"
                onLeftClick={() => this.props.leftClickCallback ? this.props.leftClickCallback() : this._onLeftButtonClick()}
                rightContent={right?right:null}
        >{title}</NavBar>
        );
    }

}

navBar.contextTypes = {
    router: React.PropTypes.object.isRequired
};