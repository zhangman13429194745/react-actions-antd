/**
 * Created by zhangmanman on 2017/8/3.
 */
import React from 'react';
import {connect} from 'react-redux';
import {Button} from 'antd-mobile';
import {CountTime} from "../constants/config";
import {themeColor} from "../constants/ui";

class VerificationCodeButton extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            liked:true,
            count:CountTime
        };
    }

    componentDidMount() {
    }
    handleClick = () => {
        if(this.state.liked){
            this.timer = setInterval(function () {
                var count = this.state.count;
                this.state.liked = false;
                count -= 1;
                if (count < 1) {
                    this.setState({
                        liked: true
                    });
                    count = 60;
                    clearInterval(this.timer);
                }
                this.setState({
                    count: count
                });
            }.bind(this), 1000);
        }

    }
    render() {
        let text = this.state.liked ? '获取验证码' : this.state.count;
        return (
            <div>
                <Button size="small" style={this.state.liked ? {borderColor:themeColor.mainColor,color:themeColor.mainColor}:{borderRadius:25,backgroundColor:themeColor.mainColor,color:'#fff'}} onClick={this.handleClick}>{text}</Button>
            </div>
        );
    }
}

VerificationCodeButton.contextTypes = {
    router: React.PropTypes.object.isRequired
};
export default connect(
    (state) => ({}),
    (dispatch) => ({})
)(VerificationCodeButton);
