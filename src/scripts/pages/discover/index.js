import React from 'react';
import { PropTypes } from 'react-router';
import { connect } from 'react-redux';

//UI component
import { NavBar, Icon } from 'antd-mobile';

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
    render() {        
        return (
            <div>
            this is discover
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

    })
)(index);



