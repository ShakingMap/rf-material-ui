import React from 'react';

const labelStyle = {
    lineHeight: '12px',
    fontSize: '12px',
    fontFamily: 'Roboto, sans-serif'
};

export default (props)=> {
    const {style, children, ...otherProps} = props;
    return <label style={Object.assign({}, labelStyle, style)} {...otherProps}>{children}</label>
}