import React from 'react';
import {cleanValue, formatItems} from 'rf-fields-utils';

const propTypes = {
    id: React.PropTypes.string,
    validationState: React.PropTypes.any,
    value: React.PropTypes.arrayOf(React.PropTypes.string),
    onChange: React.PropTypes.func,
    readOnly: React.PropTypes.bool,
    disabled: React.PropTypes.bool,

    items: React.PropTypes.object // key:{label, readOnly, disabled} | key:label
};

const defaultProps = {
    onChange(){},
    items: {}
};

class Select extends React.Component {
    render() {
        let {id, validationState, value, onChange, readOnly, disabled,
            items,
            ...otherProps} = this.props;

        items = formatItems(items);
        
        return <div className={validationState ? ('has-'+validationState):''}>
            <select {...{
                className: "form-control",
                multiple: true,
                value: value,
                onChange: e=>onChange(Array.from(e.target.options).filter(option=>option.selected).map(option=>option.value), e)
            }}>
                {
                    Object.keys(items).map((key, index)=> <option {...{
                            key: key,
                            ref: key,
                            value: key,
                            readOnly: items[key].readOnly || readOnly,
                            disabled: items[key].disabled || disabled
                        }}>{items[key].label}</option>
                    )
                }
            </select>
        </div>
    }
}

Select.propTypes = propTypes;
Select.defaultProps = defaultProps;
Select.cleanValue = cleanValue.manyOfItems;

export default Select;