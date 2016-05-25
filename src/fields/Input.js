import React from 'react';
import Wrapper from '../Wrapper';
import {cleanValue} from 'rf-fields-utils';

const propTypes = {
    id: React.PropTypes.string,
    validationState: React.PropTypes.any,
    validationMessage: React.PropTypes.string,
    value: React.PropTypes.string,
    onChange: React.PropTypes.func,
    readOnly: React.PropTypes.bool,
    disabled: React.PropTypes.bool,

    label: React.PropTypes.string

    // other props will be passed down to inner input directly
};

const defaultProps = {
    onChange(){}
};

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.id = Math.random() + '';
    }

    render() {
        let {id, validationState, validationMessage, value, onChange, readOnly, disabled,
            label,
            ...otherProps} = this.props;

        if (!id) id = this.id;

        return <Wrapper {...{validationState, validationMessage, label, id}}>
            <input
                id={id}
                value={value}
                onChange={e=>onChange(e.target.value, e)}
                readOnly={readOnly}
                disabled={disabled}
                {...otherProps}
            />
        </Wrapper>
    }
}

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;
Input.cleanValue = cleanValue.string;
export default Input;