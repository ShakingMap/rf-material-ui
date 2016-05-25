import React from 'react';
import MUICheckbox from 'material-ui/Checkbox';
import {cleanValue} from 'rf-fields-utils';
import utils from '../utils';

const propTypes = {
    id: React.PropTypes.string,
    validationState: React.PropTypes.any,
    value: React.PropTypes.bool,
    onChange: React.PropTypes.func,
    readOnly: React.PropTypes.bool,
    disabled: React.PropTypes.bool,

    label: React.PropTypes.string

    // other props will be passed down to inner input directly
};

const defaultProps = {
    onChange(){}
};

class Checkbox extends React.Component {
    constructor(props) {
        super(props);
        this.id = Math.random() + '';
    }

    render() {
        let {
            id, validationState, value, onChange, readOnly, disabled,
            label,
            ...otherProps
        } = this.props;

        if (!id) id = this.id;
        const validationColor = utils.getValidationColor(validationState);

        return <MUICheckbox
            id={id}
            label={label}
            checked={value}
            onCheck={(e, checked)=>onChange(checked, e)}
            readOnly={readOnly}
            disabled={disabled}
            labelStyle={{color: validationColor}}
            {...otherProps}
        />
    }
}

Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;
Checkbox.cleanValue = cleanValue.bool;

export default Checkbox;