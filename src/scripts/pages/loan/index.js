import React from 'react';
import { PropTypes } from 'react-router';
import { connect } from 'react-redux';

//UI component
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
                this is loan
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



