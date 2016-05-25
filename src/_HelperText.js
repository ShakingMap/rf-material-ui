import React from 'react';

const helperTextStyle = {
    fontSize: '12px',
    lineHeight: '12px',
    fontFamily: 'Roboto, sans-serif'
};

export default (props)=> {
    const {style, children, ...otherProps} = props;
    return <div style={Object.assign({}, helperTextStyle, style)} {...otherProps}>{children}</div>
}