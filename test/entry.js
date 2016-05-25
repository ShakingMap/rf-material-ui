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
            checkboxGroup: [],
            input: '',
            number: null,
            password: ''
        }
    }

    render() {
        return <MuiThemeProvider muiTheme={getMuiTheme()}>
            <div>
                <fields.Checkbox {...{
                    label: 'Checkbox',
                    text: 'Check Me',
                    value: this.state.checkbox,
                    onChange: v=> this.setState({checkbox: v}),
                    validationState: 'error',
                    validationMessage: 'error message',
                    disabled: false,
                }}/>
                <fields.CheckboxGroup {...{
                    label: 'Checkbox Group',
                    value: this.state.checkboxGroup,
                    onChange: v=> this.setState({checkboxGroup: v}),
                    items: {
                        a: {label: 'A'},
                        b: {label: 'B'},
                        c: {label: 'C', readOnly: true},
                        d: {label: 'D', disabled: true}
                    },
                    inline: true,
                    validationState: 'error',
                    validationMessage: 'error message',
                    disabled: false,
                }}/>
                <fields.Input {...{
                    label: 'Input',
                    value: this.state.input,
                    onChange: v=> this.setState({input: v}),
                    validationState: 'error',
                    validationMessage: 'error message',
                    disabled: false,
                }}/>
                <fields.Number {...{
                    label: 'Number',
                    value: this.state.number,
                    onChange: v=> this.setState({number: v}),
                    validationState: 'error',
                    validationMessage: 'error message',
                    disabled: false,
                    hintText: 'hello'
                }}/>
                <fields.Password {...{
                    label: 'Password',
                    value: this.state.password,
                    onChange: v=> this.setState({password: v}),
                    validationState: 'error',
                    validationMessage: 'error message',
                    disabled: false,
                    hintText: 'hello'
                }}/>
            </div>
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
