/**
 * Created by jihun on 2016. 10. 26..
 */

var Item = React.createClass({
    itemClick: function(){
        this.setState({
            disabled: true
        });
    },
    getInitialState: function() {
        return {
            disabled: false
        }
    },
    render: function() {
        if (this.state.disabled) {
            return null;
        } else {
            return <li onClick={this.itemClick}>{ this.props.text }</li>;
        }
    }
});