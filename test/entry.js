import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

import {Wrapper, Group, Array, fields} from '../lib';
import utils from '../lib/utils';

class TestPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            
        </div>
    }
}

let root = document.getElementById('root');
if (!root) {
    root = document.createElement('div');
    root.id = 'root';
    document.body.appendChild(root);
}

ReactDOM.render(
    <TestPage/>,
    root
);
