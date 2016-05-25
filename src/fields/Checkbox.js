import React from 'react';
import MUICheckbox from 'material-ui/Checkbox';
import Wrapper from '../Wrapper';

const propTypes = {
    id: React.PropTypes.string,
    validationState: React.PropTypes.any,
    validationMessage: React.PropTypes.string,
    value: React.PropTypes.bool,
    onChange: React.PropTypes.func,
    readOnly: React.PropTypes.bool,
    disabled: React.PropTypes.bool,

    label: React.PropTypes.string,
    text: React.PropTypes.string

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
            id, validationState, validationMessage, value, onChange, readOnly, disabled,
            label, text,
            ...otherProps
        } = this.props;

        if (!id) id = this.id;

        return <Wrapper {...{
            validationState, validationMessage, label, id
        }}>
            <MUICheckbox
                id={id}
                label={text}
                checked={value}
                onCheck={(e, checked)=>onChange(checked, e)}
                readOnly={readOnly}
                disabled={disabled}
                {...otherProps}
            />
        </Wrapper>
    }
}

Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;
Checkbox.cleanValue = (value, options) => value === undefined ? value : !!value;

export default Checkbox;