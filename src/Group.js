import React from 'react';
import Paper from 'material-ui/Paper';

const propTypes = {
    validationState: React.PropTypes.any
};

class Group extends React.Component {
    render() {
        const {validationState, children} = this.props;
        return <Paper style={{padding: '16px'}}>
            {children}
        </Paper>
    }
}

Group.propTypes = propTypes;

export default Group