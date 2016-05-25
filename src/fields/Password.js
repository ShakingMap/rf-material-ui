import React from 'react';
import {cleanValue} from 'rf-fields-utils';
import TextField from 'material-ui/TextField';
import utils from '../utils';
import IconButton from 'material-ui/IconButton';
import LockIcon from 'material-ui/svg-icons/action/lock';
import LockOpenIcon from 'material-ui/svg-icons/action/lock-open';

const propTypes = {
    id: React.PropTypes.string,
    validationState: React.PropTypes.any,
    value: React.PropTypes.string,
    onChange: React.PropTypes.func,
    readOnly: React.PropTypes.bool,
    disabled: React.PropTypes.bool,

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
            id, validationState, value, onChange, readOnly, disabled,
            display,
            ...otherProps
        } = this.props;

        display = display || this.state.display;
        const validationColor = utils.getValidationColor(validationState);

        return <div style={{display: 'flex', alignItems: 'flex-end', margin: '-10px 0 -5px 0'}}>
            <TextField
                id={id}
                type={display === 'show' ? 'text' : 'password'}
                value={value}
                onChange={e=>onChange(e.target.value, e)}
                readOnly={readOnly}
                disabled={disabled}
                errorStyle={validationColor ? {color: validationColor, display: 'none'}:undefined}
                errorText={validationColor ? 'bug':undefined}
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