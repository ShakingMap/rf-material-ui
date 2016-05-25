import React from 'react';
import {cleanValue} from 'rf-fields-utils';
import Wrapper from '../Wrapper';
import TextField from 'material-ui/TextField';
import utils from '../utils';

const propTypes = {
    id: React.PropTypes.string,
    validationState: React.PropTypes.any,
    validationMessage: React.PropTypes.string,
    value: React.PropTypes.number,
    onChange: React.PropTypes.func,
    readOnly: React.PropTypes.bool,
    disabled: React.PropTypes.bool,

    label: React.PropTypes.string

    // other props will be passed down to inner input directly
};

const defaultProps = {
    onChange(){}
};

class NumberField extends React.Component {
    render() {
        let {
            id, validationState, validationMessage, value, onChange, readOnly, disabled,
            label,
            ...otherProps
        } = this.props;

        const validationColor = utils.getValidationColor(validationState);

        return <TextField
            id={id}
            type="number"
            value={value === null ? '' : String(value)}
            onChange={e=>onChange(e.target.value === '' ? null : Number(e.target.value), e)}
            readOnly={readOnly}
            disabled={disabled}
            floatingLabelText={label}
            errorText={validationMessage}
            floatingLabelStyle={validationColor ? {color: validationColor}:undefined}
            errorStyle={validationColor ? {color: validationColor}:undefined}
            style={{width: '100%'}}
            {...otherProps}
        />
    }
}

NumberField.propTypes = propTypes;
NumberField.defaultProps = defaultProps;
NumberField.displayName = 'Number';
NumberField.cleanValue = cleanValue.number;

export default NumberField;