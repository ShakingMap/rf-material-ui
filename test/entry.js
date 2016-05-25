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
            password: '',
            radioGroup: '',
            select: '',
            text: '',
            textarea: ''
        }
    }

    render() {
        return <MuiThemeProvider muiTheme={getMuiTheme()}>
            <div>
                <Wrapper {...{
                    validationState: 'error',
                    validationMessage: 'error message',
                    label: 'Checkbox',
                }}>
                    <fields.Checkbox {...{
                        validationState: 'warning',
                        label: 'Check Me',
                        value: this.state.checkbox,
                        onChange: v=> this.setState({checkbox: v}),
                        disabled: false,
                    }}/>
                </Wrapper>
                <Wrapper {...{
                    label: 'Checkbox Group',
                    validationState: 'error',
                    validationMessage: 'error message',
                }}>
                    <fields.CheckboxGroup {...{
                        value: this.state.checkboxGroup,
                        validationState: 'success',
                        onChange: v=> this.setState({checkboxGroup: v}),
                        items: {
                            a: {label: 'A'},
                            b: {label: 'B'},
                            c: {label: 'C', readOnly: true},
                            d: {label: 'D', disabled: true}
                        },
                        inline: true,
                        disabled: false,
                    }}/>

                </Wrapper>
                <Wrapper {...{
                    validationState: 'error',
                    validationMessage: 'error message',
                    label: 'Input',
                }}>
                    <fields.Input {...{
                        value: this.state.input,
                        onChange: v=> this.setState({input: v}),
                        disabled: false,
                    }}/>

                </Wrapper>
                <Wrapper {...{
                    label: 'Number',
                    validationState: 'error',
                    validationMessage: 'error message',
                }}>
                    <fields.Number {...{
                        value: this.state.number,
                        onChange: v=> this.setState({number: v}),
                        disabled: false,
                        hintText: 'hello',
                        validationState: 'warning'
                    }}/>

                </Wrapper>
                <Wrapper {...{
                    validationState: 'success',
                    validationMessage: 'error message',
                    label: 'Password',
                }}>
                    <fields.Password {...{
                        value: this.state.password,
                        onChange: v=> this.setState({password: v}),
                        validationState: 'success',
                        disabled: false,
                        hintText: 'hello'
                    }}/>
                </Wrapper>
                <Wrapper {...{
                    label: 'Radio Group',
                    validationState: 'error',
                    validationMessage: 'error message',
                }}>
                    <fields.RadioGroup {...{
                        value: this.state.radioGroup,
                        onChange: v=> this.setState({radioGroup: v}),
                        items: {
                            a: {label: 'A'},
                            b: {label: 'B'},
                            c: {label: 'C', readOnly: true},
                            d: {label: 'D', disabled: true}
                        },
                        inline: true,
                        disabled: false,
                    }}/>
                </Wrapper>
                <Wrapper {...{
                    label: 'Select',
                    validationState: 'error',
                    validationMessage: 'error message',
                }}>
                    <fields.Select {...{
                        validationState: 'success',
                        value: this.state.select,
                        onChange: v=> this.setState({select: v}),
                        items: {
                            a: {label: 'A'},
                            b: {label: 'B'},
                            c: {label: 'C', readOnly: true},
                            d: {label: 'D', disabled: true}
                        },
                        disabled: false,
                    }}/>
                </Wrapper>
                <Wrapper {...{
                    validationState: 'success',
                    validationMessage: 'error message',
                    label: 'Text',
                }}>
                    <fields.Text {...{
                        value: this.state.text,
                        onChange: v=> this.setState({text: v}),
                        validationState: 'warning',
                        disabled: false,
                        hintText: 'hello'
                    }}/>
                </Wrapper>
                <Wrapper {...{
                    validationState: 'success',
                    validationMessage: 'error message',
                    label: 'Textarea',
                }}>
                    <fields.Textarea {...{
                        value: this.state.textarea,
                        onChange: v=> this.setState({textarea: v}),
                        validationState: 'warning',
                        disabled: false,
                        hintText: 'hello'
                    }}/>
                </Wrapper>
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
