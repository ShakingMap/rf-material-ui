import React from 'react';
import {cleanValue} from 'rf-fields-utils';
import TextField from 'material-ui/TextField';
import utils from '../utils';

const propTypes = {
    id: React.PropTypes.string,
    validationState: React.PropTypes.any,
    value: React.PropTypes.number,
    onChange: React.PropTypes.func,
    readOnly: React.PropTypes.bool,
    disabled: React.PropTypes.bool,

    // other props will be passed down to inner input directly
};

const defaultProps = {
    onChange(){}
};

class NumberField extends React.Component {
    render() {
        let {
            id, validationState, validationMessage, value, onChange, readOnly, disabled,
            ...otherProps
        } = this.props;

        const validationColor = utils.getValidationColor(validationState);
        console.log(validationColor);
        return <TextField
            id={id}
            type="number"
            value={value === null ? '' : String(value)}
            onChange={e=>onChange(e.target.value === '' ? null : Number(e.target.value), e)}
            readOnly={readOnly}
            disabled={disabled}
            style={{width: '100%', margin: '-10px 0 -5px 0'}}
            errorStyle={validationColor ? {color: validationColor, display: 'none'}:undefined}
            errorText={validationColor ? 'bug':undefined}
            {...otherProps}
        />
    }
}

NumberField.propTypes = propTypes;
NumberField.defaultProps = defaultProps;
NumberField.displayName = 'Number';
NumberField.cleanValue = cleanValue.number;

export default NumberField;