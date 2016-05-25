import React from 'react';

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

        return <div className="panel panel-default">
            <div className="panel-body">
                {
                    !disabled ?
                        <div className="array-actions" style={{marginBottom: '10px'}}>
                            {
                                updating ?
                                    <button type="button" className="btn btn-primary"
                                            onClick={()=>this.setState({updating: false})}>
                                        <span className="glyphicon glyphicon-ok" aria-hidden="true"></span>
                                    </button>
                                    :
                                    <button type="button" className="btn btn-primary"
                                            onClick={()=>this.setState({updating: true})}>
                                        <span className="glyphicon glyphicon-pencil" aria-hidden="true"></span>
                                    </button>
                            }
                        </div>
                        : null
                }
                {children.map((child, index)=><div key={index}>
                    {
                        !disabled && updating ?
                            <div className="array-item-actions" style={{marginBottom: '10px'}}>
                                <button type="button" style={{marginRight: '10px'}} className="btn btn-primary"
                                        onClick={()=>onInsert(index)}>
                                    <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
                                </button>
                                <button type="button" style={{marginRight: '10px'}} className="btn btn-primary"
                                        onClick={()=>onRemove(index)}>
                                    <span className="glyphicon glyphicon-minus" aria-hidden="true"></span>
                                </button>
                                <button type="button" style={{marginRight: '10px'}} className="btn btn-primary"
                                        onClick={index > 0 ? ()=>onMove(index, index-1):null}>
                                    <span className="glyphicon glyphicon-arrow-up" aria-hidden="true"></span>
                                </button>
                                <button type="button" className="btn btn-primary"
                                        onClick={index < children.length -1? ()=>onMove(index, index+1): null}>
                                    <span className="glyphicon glyphicon-arrow-down" aria-hidden="true"></span>
                                </button>
                            </div>
                            : null
                    }
                    {child}
                </div>)}
                {
                    !disabled && updating ?
                        <button type="button" className="btn btn-primary"
                                onClick={()=>onInsert(children.length)}>
                            <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
                        </button> : null
                }
            </div>
        </div>
    }
}

Array.propTypes = propTypes;
Array.defaultProps = defaultProps;

export default Array