import React from 'react';
import utils from './utils';
import Label from './_Label';
import HelperText from './_HelperText';

const propTypes = {
    label: React.PropTypes.string,
    validationState: React.PropTypes.any,
    validationMessage: React.PropTypes.string,
    id: React.PropTypes.string
};

class Wrapper extends React.Component {
    render() {
        const {label, validationState, validationMessage, id, children} = this.props;
        const validationColor = utils.getValidationColor(validationState) || utils.greyColor;

        return <div style={{marginBottom: '5px'}}>
            {label ? <Label style={{color: validationColor}} htmlFor={id}>{label}</Label> : null}
            <div style={{margin: '5px 0'}}>
                {children}
            </div>
            {validationMessage ? <HelperText style={{color: validationColor}}>{validationMessage}</HelperText> : null}
        </div>
    }
}

Wrapper.propTypes = propTypes;

export default Wrapper