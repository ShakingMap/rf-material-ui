import React from 'react';
import {cleanValue, formatItems} from 'rf-fields-utils';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import utils from '../utils';

const propTypes = {
    id: React.PropTypes.string,
    validationState: React.PropTypes.any,
    value: React.PropTypes.string,
    onChange: React.PropTypes.func,
    readOnly: React.PropTypes.bool,
    disabled: React.PropTypes.bool,

    items: React.PropTypes.object, // key:{label, readOnly, disabled} | key:label
    inline: React.PropTypes.bool
};

const defaultProps = {
    onChange(){},
    items: {}
};

class RadioGroup extends React.Component {
    constructor(props) {
        super(props);
        this.radioGroupName = Math.random() + ''
    }

    render() {
        let {
            id, validationState, value, onChange, readOnly, disabled,
            items, inline,
            ...otherProps
        } = this.props;

        items = formatItems(items);
        const validationColor = utils.getValidationColor(validationState);

        return <RadioButtonGroup name={this.radioGroupName} valueSelected={value} onChange={(e,v)=>onChange(v,e)}>
            {
                Object.keys(items).map((key, index)=> <RadioButton
                    key={index}
                    value={key}
                    style={inline? {display: 'inline-block', width: 'auto', marginRight: '30px'}:null}
                    label={items[key].label}
                    readOnly={items[key].readOnly || readOnly}
                    disabled={items[key].disabled || disabled}
                    labelStyle={{color: validationColor}}
                />)
            }
        </RadioButtonGroup>
    }
}

RadioGroup.propTypes = propTypes;
RadioGroup.defaultProps = defaultProps;
RadioGroup.cleanValue = cleanValue.oneOfItems;

export default RadioGroup;