import React from 'react';
import ReactDom from 'react-dom';


var App = React.createClass({
    render: function () {
        return (
            <div>
                <h1>Cst</h1>
            </div>
        )
    }
});

ReactDom.render(
    <App/>,
    document.getElementById('root')
)