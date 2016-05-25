import React from 'react';
import {cleanValue} from 'rf-fields-utils';
import Wrapper from '../Wrapper';
import TextField from 'material-ui/TextField';
import utils from '../utils';
import IconButton from 'material-ui/IconButton';
import LockIcon from 'material-ui/svg-icons/action/lock';
import LockOpenIcon from 'material-ui/svg-icons/action/lock-open';

const propTypes = {
    id: React.PropTypes.string,
    validationState: React.PropTypes.any,
    validationMessage: React.PropTypes.string,
    value: React.PropTypes.string,
    onChange: React.PropTypes.func,
    readOnly: React.PropTypes.bool,
    disabled: React.PropTypes.bool,

    label: React.PropTypes.string,
    display: React.PropTypes.oneOf(['show', 'hide'])

    // other props will be passed down to inner input directly
};

const defaultProps = {
    onChange(){}
};

class Password extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: 'hide'
        }
    }

    render() {
        let {
            id, validationState, validationMessage, value, onChange, readOnly, disabled,
            label, display,
            ...otherProps
        } = this.props;

        display = display || this.state.display;
        const validationColor = utils.getValidationColor(validationState);

        return <div style={{display: 'flex', alignItems: 'flex-end'}}>
            <TextField
                id={id}
                type={display === 'show' ? 'text' : 'password'}
                value={value}
                onChange={e=>onChange(e.target.value, e)}
                readOnly={readOnly}
                disabled={disabled}
                floatingLabelText={label}
                errorText={validationMessage}
                floatingLabelStyle={validationColor ? {color: validationColor}:undefined}
                errorStyle={validationColor ? {color: validationColor}:undefined}
                style={{width: '100%'}}
                {...otherProps}
            />

            <IconButton onClick={()=>this.setState({display: display === 'hide' ? 'show':'hide'})}>
                {
                    display === 'show' ? <LockOpenIcon /> : null
                }
                {
                    display === 'hide' ? <LockIcon /> : null
                }
            </IconButton>
        </div>;
    }

    onToggleDisplay() {
        this.setState({display: this.state.display === 'show' ? 'hide' : 'show'})
    }
}

Password.propTypes = propTypes;
Password.defaultProps = defaultProps;
Password.cleanValue = cleanValue.string;

export default Password;