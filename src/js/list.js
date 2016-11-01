/**
 * Created by jihun on 2016. 10. 26..
 */

var List = React.createClass({
    propTypes: {
        lists: React.PropTypes.array.isRequired,
        title: React.PropTypes.string.isRequired,
    },
    render: function(){
        var lists = [];

        for(var i in this.props.lists){
            lists.push(<Item key={i} text={this.props.lists[i]}/>);
        }

        return <ul>
            <h2>{ this.props.title }</h2>
            { lists }
        </ul>
    }
});