import React from 'react';

const propTypes = {
    id: React.PropTypes.string,
    validationState: React.PropTypes.any,
    value: React.PropTypes.object, // {path, file, files}
    onChange: React.PropTypes.func,
    readOnly: React.PropTypes.bool,
    disabled: React.PropTypes.bool

    // other props will be passed down to inner input directly
};

const defaultProps = {
    onChange(){}
};

class File extends React.Component {
    render() {
        let {id, validationState, value, onChange, readOnly, disabled, ...otherProps} = this.props;

        return <div className={validationState ? ('has-'+validationState):''}>
            <input
                id={id}
                type="file"
                value={value.path}
                onChange={e=>onChange({path:e.target.value, file:e.target.files[0], files: e.target.files}, e)}
                readOnly={readOnly}
                disabled={disabled}
                {...otherProps}
            />
        </div>
    }
}

File.propTypes = propTypes;
File.defaultProps = defaultProps;
File.cleanValue = (value, options)=> {
    if (value === undefined) return {path: undefined};
    else if (!value || typeof value !== 'object' || typeof value.path !== 'string') return {path: ''};
    else return value;
};

export default File;