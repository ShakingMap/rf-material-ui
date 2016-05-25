import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

injectTapEventPlugin();

import {Wrapper, Group, Array, fields} from '../lib';
import utils from '../lib/utils';

class TestPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checkbox: false,
        }
    }

    render() {
        return <MuiThemeProvider muiTheme={getMuiTheme()}>
            <fields.Checkbox {...{
                label: 'Checkbox',
                text: 'Check Me',
                value: this.state.checkbox,
                onChange: v=> this.setState({checkbox: v}),
                validationState: 'error',
                validationMessage: 'error message'
            }}/>
        </MuiThemeProvider>
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
