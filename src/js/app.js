/**
 * Created by jihun on 2016. 10. 26..
 */

window.onload = function() {
    var data = {
        lists:[
            'hello', 'hi', 'diablo', 'overwatch'
        ],
        title:"This is title"
    }

    var title = "This is title";
    ReactDOM.render(<List lists={data.lists} title={data.title}/>, document.getElementById('root'));
};