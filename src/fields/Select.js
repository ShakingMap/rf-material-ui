import React from 'react';
import {cleanValue, formatItems} from 'rf-fields-utils';
import utils from '../utils';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const propTypes = {
    id: React.PropTypes.string,
    validationState: React.PropTypes.any,
    value: React.PropTypes.string,
    onChange: React.PropTypes.func,
    readOnly: React.PropTypes.bool,
    disabled: React.PropTypes.bool,

    items: React.PropTypes.object // key:{label, readOnly, disabled} | key:label
};

const defaultProps = {
    onChange(){}
};

class Select extends React.Component {
    render() {
        let {
            id, validationState, value, onChange, readOnly, disabled,
            items,
            ...otherProps
        } = this.props;

        items = formatItems(items);
        const validationColor = utils.getValidationColor(validationState);

        return <SelectField {...{
            value,
            onChange: (e, index, value)=> onChange(value, e),
            disabled,
            readOnly,
            style: {width: '100%', margin: '-10px 0 -5px 0'},
            errorStyle: validationColor ? {color: validationColor, display: 'none'} : undefined,
            errorText: validationColor ? 'bug' : undefined
        }}>
            {
                Object.keys(items).map((key, index)=> <MenuItem
                    key={key}
                    value={key}
                    primaryText={items[key].label}
                    disabled={items[key].disabled}
                    readOnly={items[key].readOnly}
                />)
            }
        </SelectField>
    }
}

Select.propTypes = propTypes;
Select.defaultProps = defaultProps;
Select.cleanValue = cleanValue.oneOfItems;

export default Select;