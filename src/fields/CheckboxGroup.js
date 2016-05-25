import React from 'react';
import MUICheckbox from 'material-ui/Checkbox';
import {cleanValue, formatItems} from 'rf-fields-utils';
import utils from '../utils';

const propTypes = {
    id: React.PropTypes.string,
    validationState: React.PropTypes.any,
    value: React.PropTypes.arrayOf(React.PropTypes.string),
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

class CheckboxGroup extends React.Component {
    render() {
        let {
            id, validationState, value, onChange, readOnly, disabled,
            items, inline,
            ...otherProps
        } = this.props;

        items = formatItems(items);
        const validationColor = utils.getValidationColor(validationState);

        return <div>
            {
                Object.keys(items).map((key, index)=> <MUICheckbox
                    style={inline? {display: 'inline-block', width: 'auto', marginRight: '30px'}:null}
                    key={index}
                    label={items[key].label}
                    checked={value.indexOf(key) > -1}
                    disabled={items[key].disabled || disabled}
                    readOnly={items[key].readOnly || readOnly}
                    labelStyle={{color: validationColor}}
                    onCheck={(e, checked)=>{
                                    let newValue;
                                    if (checked) {
                                        if (value.includes(key)) newValue = value;
                                        else newValue = value.concat(key);
                                    }
                                    else {
                                        if (!value.includes(key)) newValue = value;
                                        else {
                                            const index = value.indexOf(key);
                                            newValue = value.slice(0, index).concat(value.slice(index + 1));
                                        }
                                    }
                                    onChange(newValue, e);
                                }}
                    {...otherProps}
                />)
            }
        </div>
    }
}

CheckboxGroup.propTypes = propTypes;
CheckboxGroup.defaultProps = defaultProps;
CheckboxGroup.cleanValue = cleanValue.manyOfItems;

export default CheckboxGroup;