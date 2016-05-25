import React from 'react';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import AddIcon from 'material-ui/svg-icons/content/add'
import RemoveIcon from 'material-ui/svg-icons/content/remove'
import EditIcon from 'material-ui/svg-icons/editor/mode-edit'
import OkIcon from 'material-ui/svg-icons/action/done';
import UpIcon from 'material-ui/svg-icons/navigation/arrow-upward';
import DownIcon from 'material-ui/svg-icons/navigation/arrow-downward';


const propTypes = {
    validationState: React.PropTypes.any,

    children: React.PropTypes.arrayOf(React.PropTypes.node),

    // func(index)
    onInsert: React.PropTypes.func,

    // func(index)
    onRemove: React.PropTypes.func,

    // func(fromIndex, toIndex)
    onMove: React.PropTypes.func,

    disabled: React.PropTypes.bool
};

const defaultProps = {
    children: [],
    onInsert(){},
    onRemove(){},
    onMove(){}
};

class Array extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            updating: false
        }
    }

    render() {
        const {validationState, onInsert, onRemove, onMove, children, disabled} = this.props;
        const {updating} = this.state;

        return <Paper style={{padding: '16px'}}>
            {
                !disabled ?
                    <div className="array-actions" style={{marginBottom: '10px'}}>
                        {
                            updating ?
                                <IconButton onClick={()=>this.setState({updating: false})}>
                                    <OkIcon/>
                                </IconButton>
                                :
                                <IconButton onClick={()=>this.setState({updating: true})}>
                                    <EditIcon/>
                                </IconButton>
                        }
                    </div>
                    : null
            }
            {children.map((child, index)=><div key={index}>
                {
                    !disabled && updating ?
                        <div className="array-item-actions" style={{marginBottom: '10px'}}>
                            <IconButton style={{marginRight: '10px'}} onClick={()=>onInsert(index)}>
                                <AddIcon/>
                            </IconButton>
                            <IconButton style={{marginRight: '10px'}} onClick={()=>onRemove(index)}>
                                <RemoveIcon/>
                            </IconButton>
                            <IconButton style={{marginRight: '10px'}}
                                        onClick={index > 0 ? ()=>onMove(index, index-1):undefined}>
                                <UpIcon/>
                            </IconButton>
                            <IconButton onClick={index < children.length -1? ()=>onMove(index, index+1): undefined}>
                                <DownIcon/>
                            </IconButton>
                        </div>
                        : null
                }
                {child}
            </div>)}
            {
                !disabled && updating ?
                    <IconButton style={{marginRight: '10px'}} onClick={()=>onInsert(children.length)}>
                        <AddIcon/>
                    </IconButton>
                    : null
            }
        </Paper>
    }
}

Array.propTypes = propTypes;
Array.defaultProps = defaultProps;

export default Array