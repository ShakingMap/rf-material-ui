import React from 'react';
import {cleanValue} from 'rf-fields-utils';
import TextField from 'material-ui/TextField';
import utils from '../utils';

const propTypes = {
    id: React.PropTypes.string,
    validationState: React.PropTypes.any,
    value: React.PropTypes.string,
    onChange: React.PropTypes.func,
    readOnly: React.PropTypes.bool,
    disabled: React.PropTypes.bool

    // other props will be passed down to inner input directly
};

const defaultProps = {
    onChange(){}
};

class Textarea extends React.Component {
    render() {
        let {
            id, validationState, value, onChange, readOnly, disabled,
            ...otherProps
        } = this.props;

        const validationColor = utils.getValidationColor(validationState);

        return <TextField
            id={id}
            value={value}
            onChange={e=>onChange(e.target.value, e)}
            readOnly={readOnly}
            disabled={disabled}
            multiLine
            errorStyle={validationColor ? {color: validationColor, display: 'none'}:undefined}
            errorText={validationColor ? 'bug':undefined}
            style={{width: '100%', margin: '-10px 0 -5px 0'}}
            {...otherProps}
        />;
    }
}

Textarea.propTypes = propTypes;
Textarea.defaultProps = defaultProps;
Textarea.cleanValue = cleanValue.string;

export default Textarea;